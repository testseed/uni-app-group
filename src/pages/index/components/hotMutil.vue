<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeHotMutliAPI } from '@/api/home'
import type { homeHotMutliType } from '@/types/home'
import { ref } from 'vue'
const hotMutil = ref<homeHotMutliType[]>([])
const getHomeHotMutliList = async () => {
  const res = await getHomeHotMutliAPI()
  console.log(res)
  hotMutil.value = res.result
}
const hotTap = (type: string) => {
  uni.navigateTo({
    url: `/pages/hot/hot?type=${type}`,
  })
}
onLoad(() => {
  getHomeHotMutliList()
})
defineExpose({
  getHomeHotMutliList,
})
</script>

<template>
  <view class="hotmutil">
    <view class="hotmutil-item" v-for="item in hotMutil" :key="item.id">
      <view class="hot-top">
        <text class="title">{{ item.title }}</text>
        <text class="span">{{ item.alt }}</text>
      </view>
      <view class="hot-bottom" @click="hotTap(item.type)">
        <img class="img" v-for="i in item.pictures" :key="i" :src="i" alt="" />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.hotmutil {
  display: flex;
  flex-wrap: wrap;

  .hotmutil-item {
    width: 50%;
    background-color: #ffffff;
    padding: 20rpx;
    display: flex;
    flex-direction: column;

    .hot-top {
      display: flex;
      align-items: center;
      flex: 1;

      .title {
        font-size: 32rpx;
      }

      .span {
        font-size: 26rpx;
        color: #7f7f7f;
        margin-left: 20rpx;
      }
    }

    .hot-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 2;
      margin-top: 20rpx;
      gap: 10rpx;

      .img {
        width: 200rpx;
        height: 200rpx;
      }
    }
  }
}
</style>
