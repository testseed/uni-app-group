<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import Swiper from '@/components/swiper.vue'
import Category from './components/Category.vue'
import hotMutil from './components/hotMutil.vue'
import guess from '@/components/guess.vue'
import { ref } from 'vue'
const guessRef = ref()
const swiperRef = ref()
const categoryRef = ref()
const hotmutilRef = ref()
const isrefresher = ref(false)
const scrollBottom = () => {
  guessRef.value.getGuessList()
}
const refresherrefresh = async () => {
  isrefresher.value = true
  guessRef.value.getGuessList()
  await Promise.all([
    swiperRef.value.getHomeBannerList(),
    categoryRef.value.getCategoryList(),
    hotmutilRef.value.getHomeHotMutliList(),
  ])
  isrefresher.value = false
}
</script>

<template>
  <view class="index">
    <CustomNavbar></CustomNavbar>
    <scroll-view
      @refresherrefresh="refresherrefresh"
      :refresher-triggered="isrefresher"
      refresher-enabled
      scroll-y
      class="scroll-Y"
      @scrolltolower="scrollBottom"
    >
      <view style="height: 300rpx">
        <Swiper ref="swiperRef"></Swiper>
      </view>
      <Category ref="categoryRef"></Category>
      <hotMutil ref="hotmutilRef"></hotMutil>
      <guess ref="guessRef"></guess>
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
.index {
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .scroll-Y {
    flex: 1;
    min-height: 0;
  }
}
</style>
