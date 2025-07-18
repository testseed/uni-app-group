<script setup lang="ts">
import { computed, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { memberOrderPreType } from '@/types/order'
import { getMemberOrderPreAPI, getMemberOrderPreNowAPI, postMemberOrderAPI } from '@/api/order'
import { useAddressStore } from '@/stores'
const addressStore = useAddressStore()
const address = addressStore.address
const query = defineProps<{
  skuId?: string
  count?: string
}>()
onLoad(() => {
  getMemberAddress()
})
const orderPre = ref<memberOrderPreType | null>(null)
const getMemberAddress = async () => {
  if (query.skuId && query.count) {
    const res = await getMemberOrderPreNowAPI({
      skuId: query.skuId,
      count: query.count,
    })
    console.log(res)
    orderPre.value = res.result as memberOrderPreType
  } else {
    const res = await getMemberOrderPreAPI()
    console.log(res)
    orderPre.value = res.result as memberOrderPreType
  }
}
const range = ref(['时间不限，周一至周日', '工作日送，周一至周五', '周末配送，周六至周日'])
const timeIndex = ref(0)
const orderNotes = ref('')
const onTime = (e: any) => {
  console.log(e)
  timeIndex.value = e.detail.value
}
const goAddress = () => {
  uni.navigateTo({
    url: '/page/address',
  })
}
const submitOrder = async () => {
  if (!address) {
    return uni.showToast({
      title: '请选择收货地址',
      icon: 'none',
    })
  }
  const res = await postMemberOrderAPI({
    goods: orderPre.value!.goods.map((item) => ({ skuId: item.skuId, count: Number(item.count) })),
    addressId: address.id,
    deliveryTimeType: timeIndex.value + 1,
    buyerMessage: orderNotes.value,
    payType: 1,
    payChannel: 2,
  })
  console.log(res)
  uni.redirectTo({
    url: `/page/detail?id=${res.result.id}`,
  })
}
</script>

<template>
  <view class="order">
    <view class="address">
      <uni-icons class="address-icon" type="location-filled" color="#2bbe9f" size="30"></uni-icons>
      <view @click="goAddress" class="address-one" v-if="address">
        <view>{{ address.receiver }}&nbsp;{{ address.contact }}</view>
        <view style="margin-top: 5rpx">{{ address.fullLocation }} &nbsp;{{ address.address }}</view>
      </view>
      <view v-else @click="goAddress" class="address-one"> 请填写收货地址 </view>
      <uni-icons class="address-icon" type="right" size="25" />
    </view>
    <view class="orderList">
      <view class="order-item" v-for="item in orderPre?.goods" :key="item.id">
        <image class="img" :src="item.picture" mode="scaleToFill" />
        <view class="right">
          <view class="name">{{ item.name }}</view>
          <view class="attrs">{{ item.attrsText }}</view>
          <view class="pay">
            <text class="payPrice">
              ￥{{ item.payPrice }}
              <text class="price"> ￥{{ item.price }} </text>
            </text>
            <text>*{{ item.count }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="delivery">
      <view class="delivery-item">
        <text class="text">配送时间</text>
        <picker class="input" mode="selector" :range="range" range-key="" value="" @change="onTime">
          {{ range[timeIndex] }}>
        </picker>
      </view>
      <view class="delivery-item" style="margin-top: 30rpx">
        <text class="text">订单备注</text>
        <input
          type="text"
          class="input"
          v-model="orderNotes"
          placeholder="选题，建议留言先与商家沟通确认"
        />
      </view>
    </view>
    <view class="allPrice">
      <view class="allPrice-item">
        <text>商品总价</text>
        <text>￥{{ orderPre?.summary.totalPrice }}</text>
      </view>
      <view style="margin-top: 30rpx" class="allPrice-item">
        <text>运费</text>
        <text>￥{{ orderPre?.summary.postFee }}</text>
      </view>
    </view>
  </view>
  <view class="submit">
    <text>￥{{ orderPre?.summary.totalPayPrice }}</text>
    <button @click="submitOrder">提交订单</button>
  </view>
</template>

<style lang="scss" scoped>
.submit {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: #ffffff;
  padding: 20rpx;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  text {
    color: #cf4444;
    font-size: 35rpx;
    flex: 1;
  }

  button {
    background-color: #27b99a;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffff9;
    font-size: 28rpx;
    border-radius: 40rpx;
    margin-left: auto;
  }
}

.order {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20rpx;

  .allPrice {
    background-color: #ffffff;
    margin-top: 20rpx;
    border-radius: 20rpx;
    padding: 20rpx;

    .allPrice-item {
      display: flex;
      justify-content: space-between;
      font-size: 28rpx;
      color: #333333;
    }
  }

  .delivery {
    background-color: #ffffff;
    margin-top: 20rpx;
    border-radius: 20rpx;
    padding: 20rpx;

    .delivery-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28rpx;
      color: #333333;

      .input {
        flex: 1;
        text-align: right;
      }
    }
  }

  .address {
    display: flex;
    align-items: center;
    padding: 20rpx;
    background-color: #ffffff;
    border-radius: 10rpx;

    .address-one {
      color: #666666;
      font-size: 29rpx;
      flex: 7;
    }

    .address-icon {
      flex: 1;
    }
  }

  .orderList {
    background-color: #ffffff;
    margin-top: 20rpx;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    border-radius: 20rpx;

    .order-item {
      display: flex;
      margin-bottom: 30rpx;

      .img {
        flex: 1;
        height: auto;
      }

      .right {
        flex: 3;
        margin-left: 10rpx;

        .name {
          font-size: 28rpx;
          color: #444444;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .attrs {
          background-color: #f7f7f8;
          color: #888888;
          padding: 10rpx;
          margin-top: 40rpx;
          font-size: 24rpx;
          width: auto;
        }

        .pay {
          display: flex;
          justify-content: space-between;
          margin-top: 10rpx;

          .payPrice {
            color: #cf4444;
            font-size: 28rpx;

            .price {
              color: #999999;
              font-size: 23rpx;
              text-decoration: line-through;
            }
          }
        }
      }
    }
  }
}
</style>
