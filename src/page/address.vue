<script lang="ts" setup>
import { getMemberAddressAPI, deleteMemberAddressIdAPI } from '@/api/address'
import type { memberAddressType } from '@/types/address'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import { useAddressStore } from '@/stores'
const addressStore = useAddressStore()
const goAddressForm = () => {
  uni.navigateTo({
    url: '/page/address-form',
  })
}
const updateAddress = (id?: string) => {
  uni.navigateTo({
    url: `/page/address-form?id=${id}`,
  })
}
const memberAddressList = ref<memberAddressType[]>([])
const getMemberAddress = async () => {
  const res = await getMemberAddressAPI()
  console.log(res)
  memberAddressList.value = res.result as memberAddressType[]
}
const deleteAddress = (id?: string) => {
  uni.showModal({
    content: '是否删除收货地址',
    success: async ({ confirm, cancel }) => {
      if (confirm) {
        const res = await deleteMemberAddressIdAPI(id)
        console.log(res)
        uni.showToast({
          title: '删除成功',
          icon: 'success',
        })
        getMemberAddress()
      }
    },
  })
}
const goGoods = (item: memberAddressType) => {
  console.log(item)
  addressStore.setAddress(item)
  uni.navigateBack()
}
onLoad(() => {
  getMemberAddress()
})
</script>

<template>
  <view class="address">
    <scroll-view class="scroll-item" scroll-y>
      <view
        class="address-item"
        @click="goGoods(item)"
        v-for="item in memberAddressList"
        :key="item.id"
      >
        <view class="top">
          <view class="name">
            {{ item.receiver }}&nbsp;{{ item.contact }}&nbsp;
            <view class="icon" v-if="item.isDefault === 1">默认</view>
          </view>
          <view class="update" @click="updateAddress(item.id)">修改</view>
        </view>
        <view class="bottom">
          <text>{{ item.fullLocation }}&nbsp;{{ item.address }}</text>
          <view
            class="deleta"
            style="
              margin-left: auto;
              border-radius: 30rpx;
              width: 100rpx;
              height: 70rpx;
              background-color: brown;
              color: aliceblue;
              display: flex;
              align-items: center;
              justify-content: center;
            "
            @click="deleteAddress(item.id)"
            >删除</view
          >
        </view>
      </view>
      <!-- <uni-swipe-action class="address-list">
        <uni-swipe-action-item class="address-item" v-for="item in memberAddressList" :key="item.id">
          <view>
            <view class="top">
              <view class="name">
                {{ item.receiver }}&nbsp;{{ item.contact }}&nbsp;
                <view class="icon" v-if="item.isDefault === 1">默认</view>
              </view>
              <view class="update" @click="updateAddress(item.id)">修改</view>
            </view>
            <view class="bottom">
              <text>{{ item.fullLocation }}&nbsp;{{ item.address }}</text>
            </view>
          </view>
          <template v-slot:right>
            <view><text>删除</text></view>
          </template>
        </uni-swipe-action-item>
      </uni-swipe-action> -->
    </scroll-view>
    <button class="newAddress" @click="goAddressForm">新建地址</button>
  </view>
</template>

<style lang="scss">
.address {
  height: 100vh;
  background-color: #f4f4f4;
  padding: 20rpx;
  box-sizing: border-box;

  .scroll-item {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0 20rpx;
    height: auto;

    .address-item {
      padding: 40rpx 0;
      box-sizing: border-box;
      border-bottom: 1px solid #ececec;
      color: #333333;
      font-size: 28rpx;

      .top {
        display: flex;
        align-items: center;

        .name {
          display: flex;
          align-items: center;

          .icon {
            width: 80rpx;
            height: 40rpx;
            border: 1px solid #97bd9b;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #97bd9b;
          }
        }

        .update {
          flex: 1;
          text-align: right;
          padding-left: 10rpx;
          border-left: 1px solid #ececec;
        }
      }

      .bottom {
        display: flex;
        align-items: center;
        margin-top: 30rpx;
      }
    }
  }

  .newAddress {
    background-color: #27ba9b;
    width: calc(100% - 40rpx);
    margin: 20rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    border-radius: 30rpx;
    position: fixed;
    bottom: 20rpx;
    left: 0;
    z-index: 9;
  }
}
</style>
