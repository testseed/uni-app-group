<script setup lang="ts">
import { ref } from 'vue'
import { getHomeBannerAPI } from '../api/home'
import { onLoad } from '@dcloudio/uni-app'
import type { homeBannerType } from '@/types/home'
const bannerList = ref<homeBannerType[]>()
const getHomeBannerList = async () => {
  const res = await getHomeBannerAPI(1)
  // console.log(res);
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerList()
})
defineExpose({
  getHomeBannerList,
})
</script>

<template>
  <view class="view-swiper">
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :interval="2000"
      :duration="500"
    >
      <swiper-item v-for="item in bannerList" :key="item.id">
        <!-- <image class="swiper-item" :src="item.imgUrl" mode="aspectFit" /> -->
        <img :src="item.imgUrl" class="swiper-item" alt="" />
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss" scoped>
.view-swiper {
  .swiper {
    height: 300rpx;
    width: 100%;

    .swiper-item {
      height: 300rpx;
      width: 100%;
    }
  }
}
</style>
