<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { memberAddressType } from '@/types/address'
import { postMemberAddressAPI, getMemberAddressIdAPI, putMemberAddressIdAPI } from '@/api/address'
const query = defineProps<{
  id?: string
}>()
onLoad(async () => {
  uni.setNavigationBarTitle({ title: query.id ? '修改地址' : '新建地址' })
  if (query.id) {
    getMemberAddressId()
  }
})
const getMemberAddressId = async () => {
  const res = await getMemberAddressIdAPI(query.id)
  console.log(res)
  addressForm.value = res.result as memberAddressType
  region.value = res.result.fullLocation as string
}
const addressForm = ref<memberAddressType>({
  receiver: '',
  contact: '',
  provinceCode: '',
  cityCode: '',
  countyCode: '',
  address: '',
  isDefault: 0,
})
const region = ref('')
const preserve = async () => {
  try {
    await form.value.validate()
    if (query.id) {
      const res = await putMemberAddressIdAPI(addressForm.value, query.id)
      console.log(res)
    } else {
      const res = await postMemberAddressAPI(addressForm.value)
      console.log(res)
    }
    uni.showToast({
      title: query.id ? '修改成功' : '新建成功',
      icon: 'success',
    })
    setTimeout(() => {
      uni.navigateBack()
    }, 1000)
  } catch (error) {
    uni.showToast({
      title: '请输入完整信息',
      icon: 'error',
    })
  }
}
const pickerRegion = (e: any) => {
  addressForm.value.provinceCode = e.detail.code[0]
  addressForm.value.cityCode = e.detail.code[1]
  addressForm.value.countyCode = e.detail.code[2]
  region.value = e.detail.value.join(' ')
}
const switchChange = (e: any) => {
  if (e.detail.value) {
    addressForm.value.isDefault = 1
  } else {
    addressForm.value.isDefault = 0
  }
}
const form = ref()
const rules = ref({
  receiver: [
    {
      required: true,
      errorMessage: '请填写收货人姓名',
    },
    {
      minLength: 3,
      maxLength: 5,
      errorMessage: '收货人姓名长度在3到5个字符',
    },
  ],
  contact: [
    {
      required: true,
      errorMessage: '请输入联系方式',
    },
    { pattern: /^1[3-9]\d{9}$/, errorMessage: '手机号格式不正确' },
  ],
  region: [
    {
      required: true,
      errorMessage: '请输入所在地区',
    },
  ],
  address: [
    {
      required: true,
      errorMessage: '请输入详细地址',
    },
  ],
})
</script>

<template>
  <view class="address-form">
    <!-- <view class="form">
      <view class="form-item">
        <text class="label">收货人</text>
        <input type="text" class="input" v-model="addressForm.receiver" placeholder="请填写收货人姓名">
      </view>
      <view class="form-item">
        <text class="label">手机号码</text>
        <input type="text" class="input" placeholder="请填写收货人手机号码" v-model="addressForm.contact">
      </view>
      <view class="form-item">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" :value="region" @change="pickerRegion">
          {{ region === '' ? '请选择省/市/区' : region }}
        </picker>
      </view>
      <view class="form-item">
        <text class="label">详细地址</text>
        <input type="text" class="input" placeholder="街道/门牌号等信息" v-model="addressForm.address">
      </view>
      <view class="form-item">
        <text class="label">设为默认地址</text>
        <switch :checked="addressForm.isDefault === 0 ? false : true" @change="switchChange" />
      </view>
    </view> -->
    <uni-forms class="form" ref="form" :rules="rules" :modelValue="addressForm">
      <uni-forms-item class="form-item" name="receiver">
        <text class="label">收货人</text>
        <input
          type="text"
          class="input"
          v-model="addressForm.receiver"
          placeholder="请填写收货人姓名"
        />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="contact">
        <text class="label">手机号码</text>
        <input
          type="text"
          class="input"
          placeholder="请填写收货人手机号码"
          v-model="addressForm.contact"
        />
      </uni-forms-item>
      <uni-forms-item class="form-item" name="region">
        <text class="label">所在地区</text>
        <picker class="picker" mode="region" :value="region" @change="pickerRegion">
          {{ region === '' ? '请选择省/市/区' : region }}
        </picker>
      </uni-forms-item>
      <uni-forms-item class="form-item" name="address">
        <text class="label">详细地址</text>
        <input
          type="text"
          class="input"
          placeholder="街道/门牌号等信息"
          v-model="addressForm.address"
        />
      </uni-forms-item>
      <uni-forms-item class="form-item">
        <text class="label">设为默认地址</text>
        <switch :checked="addressForm.isDefault === 0 ? false : true" @change="switchChange" />
      </uni-forms-item>
    </uni-forms>
    <button class="subit" @click="preserve">保存并使用</button>
  </view>
</template>

<style lang="scss">
.address-form {
  height: 100vh;
  background-color: #f3f3f3;
  padding: 20rpx;

  .form {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 0 20rpx;
    box-sizing: border-box;

    .form-item {
      display: flex;
      align-items: center;
      border-bottom: 1rpx solid #e7e7e7;
      height: 100rpx;

      .label {
        width: 35%;
      }
    }
  }

  .subit {
    width: 100%;
    background-color: #27ba9b;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70rpx;
    margin-top: 30rpx;
    color: #ffffff;
    border-radius: 30rpx;
  }
}
</style>
