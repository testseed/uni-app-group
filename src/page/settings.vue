<script setup lang="ts">
import { useMemberStore } from '@/stores'
const memeberStore = useMemberStore()
const cleanLogin = () => {
  uni.showModal({
    content: '是否退出登录',
    success: (success) => {
      if (success.confirm) {
        memeberStore.clearProfile()
        uni.navigateBack()
      }
    },
  })
}
const navAddress = () => {
  uni.navigateTo({
    url: '/page/address',
  })
}
</script>

<template>
  <view class="settings">
    <view
      class="item"
      @click="navAddress"
      v-if="memeberStore.profile"
      style="margin-bottom: 20rpx; margin-top: 20rpx"
    >
      <text class="text">我的收货地址</text>
      <uni-icons type="right" size="20"></uni-icons>
    </view>
    <view class="item" style="margin-bottom: 5rpx">
      <text class="text">授权管理</text>
      <uni-icons type="right" size="20"></uni-icons>
    </view>
    <view class="item" style="margin-bottom: 5rpx">
      <text class="text">问题反馈</text>
      <uni-icons type="right" size="20"></uni-icons>
    </view>
    <view class="item" style="margin-bottom: 20rpx">
      <text class="text">联系我们</text>
      <uni-icons type="right" size="20"></uni-icons>
    </view>
    <view class="item" style="margin-bottom: 25rpx">
      <text class="text">关于我的</text>
      <uni-icons type="right" size="20"></uni-icons>
    </view>
    <button v-if="memeberStore.profile" class="cleanLogin" @click="cleanLogin">退出登录</button>
  </view>
</template>

<style lang="scss" scoped>
.settings {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;
  padding: 0 5vw;
  box-sizing: border-box;

  .item {
    display: flex;
    justify-content: space-between;
    padding: 20rpx;
    background-color: #ffffff;
    align-items: center;
    height: 90rpx;
    border-radius: 20rpx;
  }

  .cleanLogin {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100rpx;
    border-radius: 20rpx;
  }
}
</style>
