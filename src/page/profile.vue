<script setup lang="ts">
import { computed, ref } from 'vue'
import type { memberProfileType, memberDataType } from '@/types/member'
import { getMemberProfileAPI, putMemberProfileAPI } from '@/api/member'
import { useMemberStore } from '@/stores'
import { onLoad } from '@dcloudio/uni-app'
const { safeAreaInsets } = uni.getSystemInfoSync()
const memberProfile = ref<memberProfileType>()
const memberStore = useMemberStore()
const getMemberProfile = async () => {
  const res = await getMemberProfileAPI()
  console.log(res)
  memberProfile.value = res.result
  userFormData.value.nickname = memberProfile.value.nickname
  userFormData.value.gender = memberProfile.value.gender
  userFormData.value.birthday = memberProfile.value.birthday
  userFormData.value.fullLocation = memberProfile.value.fullLocation
  userFormData.value.profession = memberProfile.value.profession
}
onLoad(() => {
  getMemberProfile()
})
const userFormData = ref({
  nickname: '',
  gender: '',
  birthday: '',
  profession: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  fullLocation: '',
})
const radioChange = (e: any) => {
  // console.log(e);
  userFormData.value.gender = e.detail.value
}
const getDate = (type: any) => {
  const date = new Date()
  let year: number | string = date.getFullYear()
  let month: number | string = date.getMonth() + 1
  let day: number | string = date.getDate()

  if (type === 'start') {
    year = year - 10
  } else if (type === 'end') {
    year = year + 10
  } else if (type === 'data') {
    console.log('wcnm')
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  return `${year}-${month}-${day}`
}
const endDate = computed(() => getDate('data'))
const bindTimeChange = (e: any) => {
  console.log(e)
  userFormData.value.birthday = e.detail.value
}
const code = ref([])
const bindRegionChange = (e: any) => {
  // console.log(e);
  userFormData.value.fullLocation = e.detail.value.join('')
  userFormData.value.provinceCode = e.detail.code[0]
  userFormData.value.cityCode = e.detail.code[1]
  userFormData.value.countyCode = e.detail.code[2]
}
const subit = async () => {
  console.log(userFormData.value)
  const res = await putMemberProfileAPI(userFormData.value)
  console.log(res)
  uni.showToast({
    title: '保存成功',
    icon: 'success',
  })
}
const updateAvatar = () => {
  uni.chooseMedia({
    count: 9,
    mediaType: ['image', 'video'],
    sourceType: ['album', 'camera'],
    maxDuration: 30,
    camera: 'back',
    success(res) {
      console.log(res.tempFiles)
      const { tempFilePath } = res.tempFiles[0]
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (uploadFileRes) => {
          console.log(uploadFileRes)
          if (uploadFileRes.statusCode === 200) {
            const { avatar } = JSON.parse(uploadFileRes.data).result
            memberProfile.value!.avatar = avatar
            memberStore.profile!.avatar = avatar
            uni.showToast({
              title: '更新成功',
              icon: 'success',
            })
          } else {
            uni.showToast({
              title: JSON.parse(uploadFileRes.data).message,
              icon: 'error',
            })
          }
        },
      })
    },
    fail: (fail) => {},
  })
}
const navigar = () => {
  uni.switchTab({ url: '/pages/my/my' })
}
</script>

<template>
  <view class="profile">
    <view class="back">
      <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
        <navigator
          @click="navigar"
          open-type="navigateBack"
          style="font-size: 45rpx"
          class="icon icon-left"
          hover-class="none"
        >
        </navigator>
        <view class="title">个人信息</view>
      </view>
      <view class="picture">
        <image @click="updateAvatar" class="img" :src="memberProfile?.avatar" mode="scaleToFill" />
        <text>点击修改头像</text>
      </view>
    </view>
    <view class="form">
      <view class="form-item">
        <text class="label">账号</text>
        <text class="account">{{ memberProfile?.account }}</text>
      </view>
      <view class="form-item">
        <text class="label">昵称</text>
        <input type="text" class="input" placeholder="请填写昵称" v-model="userFormData.nickname" />
      </view>
      <view class="form-item">
        <text class="label">性别</text>
        <radio-group @change="radioChange" style="display: flex; align-items: center">
          <label class="gender">
            <view>
              <radio value="男" :checked="userFormData.gender === '男'" />
            </view>
            <view>男</view>
          </label>
          <label class="gender">
            <view style="margin-left: 30rpx">
              <radio value="女" :checked="userFormData.gender === '女'" />
            </view>
            <view>女</view>
          </label>
        </radio-group>
      </view>
      <view class="form-item">
        <text class="label">出生日期</text>
        <picker
          mode="date"
          :value="userFormData.birthday"
          start="2000-1-1"
          :end="endDate"
          @change="bindTimeChange"
        >
          <view class="date">{{ userFormData.birthday }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">城市</text>
        <picker mode="region" @change="bindRegionChange" :value="code">
          <view class="uni-input">{{
            userFormData.fullLocation === '' ? '请选择城市' : userFormData.fullLocation
          }}</view>
        </picker>
      </view>
      <view class="form-item">
        <text class="label">出生日期</text>
        <input type="text" placeholder="请填写职业" v-model="userFormData.profession" />
      </view>
      <button class="subit" @click="subit">保存</button>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.profile {
  height: 100vh;
  background-color: #f4f4f4;

  .back {
    background-color: #00c9a5;
    height: 30vh;

    .navbar {
      position: relative;

      .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 500;
        color: #ffffff;
        height: 40px;
      }

      .icon {
        position: absolute;
        left: 0;
        width: 40px;
        height: 40px;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
      }
    }

    .picture {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50rpx;

      .img {
        width: 150rpx;
        height: 150rpx;
        border-radius: 50%;
      }

      text {
        color: #ffffff;
        margin-top: 10rpx;
      }
    }
  }

  .form {
    margin: 20rpx;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    box-sizing: border-box;

    .form-item {
      display: flex;
      align-items: center;
      border-bottom: 1rpx solid #e7e7e7;
      height: 100rpx;

      .label {
        width: 25%;
      }

      .gender {
        display: flex;
        align-items: center;
      }
    }

    .subit {
      width: 100%;
      background-color: #27ba9b;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 70rpx;
      color: #ffffff;
      border-radius: 30rpx;
    }
  }
}
</style>
