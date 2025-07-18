<script setup lang="ts">
import { getHotListAPI } from '@/api/hot'
import type { hotListType } from '@/types/hot'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

const type = ref()
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const currHot = ref()
const subTypeList = ref({
  pageSize: 10,
  page: 1,
})
const hotList = ref<hotListType>()
const getHotList = async () => {
  const res = await getHotListAPI(currHot.value.url, subTypeList.value)
  console.log(res)
  hotList.value = res.result
  uni.setNavigationBarTitle({
    title: hotList.value!.title,
  })
}
const activeIndex = ref(0)
const onScrolltolower = async () => {
  const currsubTypes = hotList.value?.subTypes[activeIndex.value]
  if (currsubTypes!.goodsItems.page < currsubTypes!.goodsItems.pages) {
    currsubTypes!.goodsItems.page++
  } else {
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  const res = await getHotListAPI(currHot.value.url, {
    subType: currsubTypes?.id,
    pageSize: currsubTypes!.goodsItems.pageSize,
    page: currsubTypes!.goodsItems.page,
  })
  console.log(res)
  hotList.value?.subTypes[activeIndex.value].goodsItems.items.push(
    ...res.result.subTypes[activeIndex.value].goodsItems.items,
  )
}
onLoad((options: any) => {
  // console.log(options)
  if (options.type) {
    type.value = options.type
    const foundItem = hotMap.find((item) => item.type === type.value)
    currHot.value = foundItem
    getHotList()
  } else {
    uni.showToast({
      title: '参数错误',
      icon: 'error',
    })
    uni.setNavigationBarTitle({
      title: '默认标题',
    })
  }
})
</script>

<template>
  <view class="hot">
    <view class="header">
      <img class="img" :src="hotList?.bannerPicture" alt="" />
      <view class="subtype">
        <view class="subtype-one">
          <view
            class="subtype-title"
            @tap="activeIndex = index"
            v-for="(item, index) in hotList?.subTypes"
            :key="item.id"
          >
            <text> {{ item.title }}</text>
            <view :class="{ sub: index === activeIndex }"></view>
          </view>
        </view>
      </view>
    </view>
    <scroll-view scroll-y class="scroll-Y" @scrolltolower="onScrolltolower">
      <view class="guessLike">
        <view
          class="guess-item"
          v-show="activeIndex === index"
          v-for="(item, index) in hotList?.subTypes[activeIndex].goodsItems.items"
          :key="item.id"
        >
          <image class="img" :src="item.picture" :lazy-load="true" mode="aspectFit" />
          <text class="name">{{ item.name }}</text>
          <text class="price">￥{{ item.price }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
.hot {
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .header {
    position: relative;
    width: 100%;
    height: 325rpx;

    .img {
      height: 225rpx;
      width: 100%;
      position: absolute;
      border-bottom-left-radius: 100rpx;
      border-bottom-right-radius: 100rpx;
      left: 0;
      top: 0;
    }

    .subtype {
      background-color: #ffffff;
      // background-color: aqua;
      width: calc(100% - 20rpx);
      height: 100rpx;
      margin: 0 20rpx;
      position: absolute;
      left: 0;
      top: 170rpx;
      z-index: 10;
      border-radius: 20rpx;

      .subtype-one {
        display: flex;
        align-content: center;
        justify-content: space-around;
        margin-top: 20rpx;

        .subtype-title {
          display: flex;
          flex-direction: column;
          align-items: center;

          .sub {
            width: 100rpx;
            height: 5rpx;
            margin-top: 10rpx;
            background-color: #27ba9b;
            transition: 1s all;
          }
        }
      }
    }
  }

  .scroll-Y {
    flex: 1;

    .guessLike {
      display: flex;
      flex-wrap: wrap;

      .guess-item {
        background-color: #ffffff;
        margin-bottom: 20rpx;
        width: 49%;
        margin-right: 5rpx;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 20rpx;

        .img {
          height: 304rpx;
          width: 100%;
        }

        .name {
          color: #3f3f3f;
          font-size: 26rpx;
          margin: 10rpx 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.5em;
        }

        .price {
          color: #cf4444;
          font-size: 25rpx;
          margin-top: auto;
        }
      }
    }
  }
}
</style>
