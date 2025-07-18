<script setup lang="ts">
import { getHomeGoodsGuessLikeAPI } from '@/api/home'
import type { homeGoodsGuessLikeType, guessItemType } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
const pageList = ref({
  page: 1,
  pageSize: 10,
})
const finish = ref(true)
const guessItemList = ref<guessItemType[]>([])
const getGuessList = async () => {
  if (finish.value === false) {
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  const res = await getHomeGoodsGuessLikeAPI(pageList.value)
  console.log(res)
  guessItemList.value!.push(...res.result.items)
  if (pageList.value.page < res.result.pages) {
    pageList.value.page++
  } else {
    finish.value = false
  }
}
const resetData = () => {
  guessItemList.value = []
  pageList.value.page = 1
  finish.value = true
}
const navigatorGoods = (id: string) => {
  uni.navigateTo({ url: `/pages/goods/goods?id=${id}` })
}
onLoad(() => {
  getGuessList()
})
defineExpose({
  resetData,
  getGuessList,
})
</script>

<template>
  <view class="guess">
    <text class="title">猜你喜欢</text>
    <view class="guessLike">
      <view
        class="guess-item"
        @click="navigatorGoods(item.id)"
        v-for="item in guessItemList"
        :key="item.id"
      >
        <image class="img" :src="item.picture" :lazy-load="true" mode="aspectFit" />
        <text class="name">{{ item.name }}</text>
        <text class="price">￥{{ item.price }}</text>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.guess {
  height: 100%;

  .title {
    display: flex;
    justify-content: center;
    font-size: 36rpx;
    margin: 20rpx 0;
  }

  .guessLike {
    display: flex;
    flex-wrap: wrap;

    .guess-item {
      background-color: #ffffff;
      margin-bottom: 30rpx;
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
      }

      .price {
        color: #cf4444;
        font-size: 25rpx;
        margin-top: auto;
      }
    }
  }
}
</style>
