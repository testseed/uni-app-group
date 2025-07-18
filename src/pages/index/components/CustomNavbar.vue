<script setup lang="ts">
const { safeAreaInsets, statusBarHeight } = uni.getSystemInfoSync()
</script>

<template>
  <view class="customNavbar" :style="`padding-top: ${safeAreaInsets?.top}px;`">
    <view class="title">社区团购聚合平台</view>
    <view class="input"> 搜索商品 </view>
  </view>
</template>

<style lang="scss" scoped>
.customNavbar {
  width: 100%;
  background-color: #00c19e;
  padding: 0 20rpx;
  padding-bottom: 20rpx;

  .title {
    height: 64rpx;
    display: flex;
    font-size: 36rpx;
    align-items: center;
  }

  .input {
    height: 64rpx;
    margin-top: 20rpx;
    background-color: white;
    opacity: 0.6;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20rpx;
    width: 100%;
  }
}
</style>
