<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { loginWxminType } from '@/types/login'
import { useMemberStore } from '@/stores'
import { getLoginWxMinAPI, getLoginWxMinSimple, getLoginAPi } from '../../api/login'
const memberStore = useMemberStore()
const formData = ref({
  account: '',
  password: '',
})
const submitForm = async () => {
  const res = await getLoginAPi({
    account: formData.value.account,
    password: formData.value.password,
  })
  console.log(res)
  // loginSucces(res.result)
}
let code = ''
const onGetphonenumber = async (e: any) => {
  // const encryptedData = e.detail.encryptedData
  // const iv = e.detail.iv
  //   await getLoginWxMinAPI({
  //   code,
  //   encryptedData,
  //   iv
  // })
  const res = await getLoginWxMinSimple('18186359196')
  loginSucces(res.result)
}
const loginSucces = (profile: loginWxminType) => {
  memberStore.setProfile(profile)
  uni.showToast({
    title: '登录成功',
    icon: 'success',
  })
  setTimeout(() => {
    uni.navigateBack()
  }, 1000)
}
onLoad(async () => {
  const res = await wx.login()
  code = res.code
})
</script>

<template>
  <view class="login">
    <view class="login-view">
      <input
        type="text"
        class="input"
        v-model="formData.account"
        placeholder="请输入手机号/用户名"
      />
      <input type="text" class="input" v-model="formData.password" placeholder="请输入密码" />
      <button @click="submitForm" class="login-btn">登录</button>
    </view>
    <view class="login-wx">
      <text class="title">其他登录方式</text>
      <button class="icon" open-type="getPhoneNumber" @getphonenumber="onGetphonenumber">
        <uni-icons type="phone" size="24"></uni-icons>
      </button>
      <text class="span">快捷授权手机号登录</text>
    </view>
  </view>
</template>

<style lang="scss">
.login {
  height: 100vh;

  .login-view {
    margin: 0 5vw;
    margin-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    .input {
      border-radius: 30rpx;
      box-sizing: border-box;
      border: 1px solid gray;
      height: 80rpx;
      line-height: 90rpx;
      width: 100%;
      font-size: 28rpx;
      border-radius: 72rpx;
      border: 1px solid #ddd;
      padding-left: 30rpx;
      margin-bottom: 30rpx;
    }

    .login-btn {
      background-color: #28bb9c;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      width: 100%;
      border-radius: 40rpx;
    }
  }

  .login-wx {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30rpx;

    .title {
      color: #cec4ba;
      font-size: 30rpx;
    }

    .icon {
      border: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100rpx;
      height: 100rpx;
      border-radius: 200rpx;
      margin-top: 30rpx;
    }

    .span {
      margin-top: 20rpx;
    }
  }
}
</style>
