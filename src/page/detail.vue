<script lang="ts" setup>
import type { OrderResult } from '@/types/detail'
import { getMemberOrderIdAPI } from '@/api/detail'
import { onReady } from '@dcloudio/uni-app'
import { getConsignmentAPI, getIdReceiptAPI } from '@/api/logistics'
import { computed, onMounted, ref, watch } from 'vue'
import { OrderState, orderStateList } from '@/services/constants'
import { getWxPayMiniPayAPi, getPayMockAPI } from '@/api/pay'
const page = getCurrentPages()
const pageInstance = page.at(-1) as any
const { safeAreaInsets } = uni.getSystemInfoSync()
const query = defineProps<{
  id: string
}>()
onReady(() => {
  pageInstance.animate(
    '.navbar',
    [{ backgroundColor: 'transparent' }, { backgroundColor: '#f8f8f8' }],
    1000,
    {
      scrollSource: '#scroller',
      timeRange: 1000,
      startScrollOffset: 0,
      endScrollOffset: 50,
    },
  )
  pageInstance.animate('.navbar .title', [{ color: 'transparent' }, { color: '#000' }], 1000, {
    scrollSource: '#scroller',
    timeRange: 1000,
    startScrollOffset: 0,
    endScrollOffset: 50,
  })
  pageInstance.animate('.navbar .back', [
    { color: '#ffffff' },
    { color: '#000' },
    1000,
    {
      scrollSource: '#scroller',
      timeRange: 1000,
      startScrollOffset: 0,
      endScrollOffset: 50,
    },
  ])
})
onMounted(() => {
  getMemberOrderId()
})
const order = ref<OrderResult>()
const getMemberOrderId = async () => {
  const res = await getMemberOrderIdAPI(query.id)
  console.log(res)
  order.value = res.result
  totalSeconds.value = Number(order.value.countdown)
  startCountdown()
}
const totalSeconds = ref(1)
const isRunning = ref(false)
let timer = null
const formattedTime = computed(() => {
  const hours = Math.floor(totalSeconds.value / 3600)
  const minutes = Math.floor((totalSeconds.value % 3600) / 60)
  const seconds = totalSeconds.value % 60
  const formattedHours = String(hours).padStart(2, '0')
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')
  return `${formattedHours}时${formattedMinutes}分${formattedSeconds}秒`
})
const startCountdown = () => {
  if (isRunning.value || totalSeconds.value <= 0) {
    return
  }
  isRunning.value = true
  timer = setInterval(() => {
    if (totalSeconds.value > 0) {
      totalSeconds.value--
    } else {
      pauseCoundown()
    }
  }, 1000)
}
const pauseCoundown = () => {
  isRunning.value = false
  clearInterval(timer)
  timer = null
}
watch(totalSeconds, (newValue) => {
  if (newValue === 0) {
    order.value!.orderState = OrderState.YiQuXiao
  }
})
const goPay = async () => {
  if (import.meta.env.DEV) {
    await getPayMockAPI(query.id)
  } else {
    const res = await getWxPayMiniPayAPi(query.id)
    await wx.requestPayment(res.result)
  }
  uni.showToast({
    title: '支付成功',
    icon: 'success',
  })
  setTimeout(() => {
    uni.redirectTo({ url: `/page/payment?id=${query.id}` })
  }, 1000)
}
const onOrderSend = async () => {
  if (import.meta.env.DEV) {
    const res = await getConsignmentAPI(query.id)
    console.log(res)
    order.value!.orderState = OrderState.DaiShouHuo
  }
}
</script>

<template>
  <view class="navbar" :style="`padding-top: ${safeAreaInsets?.top}px;`">
    <navigator class="back" v-if="page.length > 1" open-type="navigateBack">
      <uni-icons type="left" size="25"></uni-icons>
    </navigator>
    <navigator class="back" v-else url="/pages/" open-type="switchTab">
      <uni-icons type="home-filled" size="25"></uni-icons>
    </navigator>
    <view class="title">订单详情</view>
  </view>
  <scroll-view scroll-y class="scroll-Y" id="scroller">
    <view
      v-if="order?.orderState === OrderState.DaiFuKuan"
      class="payment"
      :style="`padding-top: ${safeAreaInsets?.top}px;`"
    >
      <view class="paytitle">等待付款</view>
      <view class="payTime">
        应付金额: ¥ {{ order.payMoney }}&nbsp;&nbsp;支付剩余{{ formattedTime }}
      </view>
      <view class="payBtn" @click="goPay"> 去支付 </view>
    </view>
    <view v-else class="payment" :style="`padding-top: ${safeAreaInsets?.top}px;`">
      <view class="paytitle">{{ orderStateList[order!.orderState].text }}</view>
      <view class="payBtn"> 再次购买 </view>
    </view>
    <view class="address">
      <uni-icons type="location-filled" size="30"></uni-icons>
      <view class="address-one">
        <view class="name">{{ order?.receiverContact }}&nbsp;{{ order?.receiverMobile }}</view>
        <view class="ress">{{ order?.receiverAddress }}</view>
      </view>
    </view>
    <view class="goods">
      <view class="goods-item" v-for="item in order?.skus" :key="item.id">
        <image class="img" :src="item.image" mode="scaleToFill" />
        <view class="right">
          <view class="name">{{ item.name }}</view>
          <view class="attrs">{{ item.attrsText }}</view>
          <view class="price">
            <text>￥{{ item.curPrice }}</text>
            <text>*1{{ item.quantity }}</text>
          </view>
        </view>
      </view>
      <view class="payPrice" style="margin-top: 40px">
        <text class="label">商品总价：</text>
        <text class="price" style="font-size: 26rpx">￥{{ order?.totalMoney }}</text>
      </view>
      <view class="payPrice">
        <text class="label">运费：</text>
        <text class="price" style="font-size: 23rpx">￥{{ order?.postFee }}</text>
      </view>
      <view class="payPrice">
        <text class="label">应付金额：</text>
        <text class="price" style="font-size: 34rpx; color: red">￥{{ order?.payMoney }}</text>
      </view>
    </view>
    <view class="order">
      <view style="font-size: 34rpx">订单信息</view>
      <view> 订单编号: {{ order?.id }} </view>
      <view>下单时间: {{ order?.createTime }}</view>
    </view>
    <view style="height: 1000rpx"></view>
  </scroll-view>
  <view class="account">
    <view class="none"></view>
    <view class="delete">删除订单</view>
    <view class="once">再次购买</view>
  </view>
</template>

<style lang="scss">
page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: #f7f7f8;
}

.account {
  position: fixed;
  bottom: 30rpx;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 20rpx;
  height: auto;
  display: flex;

  .none {
    flex: 1;
  }

  .delete {
    width: 200rpx;
    height: 70rpx;
    border: 1px solid #d9d9d9;
    color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40rpx;
  }

  .once {
    width: 200rpx;
    height: 70rpx;
    border: 1px solid #26b79c;
    color: #26b79c;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20rpx;
    border-radius: 40rpx;
  }
}

.scroll-Y {
  .order {
    margin-top: 20rpx;
    background-color: #ffffff;
    margin: 20rpx;
    padding: 20rpx;
    display: flex;
    flex-direction: column;
    font-size: 27rpx;
    color: #676767;

    view {
      margin-bottom: 20rpx;
    }
  }

  .goods {
    background-color: #ffffff;
    margin: 20rpx;
    padding: 20rpx;
    height: auto;

    .goods-item {
      display: flex;
      margin-top: 20rpx;
      margin-bottom: 20rpx;

      .img {
        flex: 1;
        height: auto;
        border-radius: 30rpx;
      }

      .right {
        flex: 3;
        margin-left: 20rpx;

        .name {
          font-size: 28rpx;
          color: #444444;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .attrs {
          margin-top: 40rpx;
          padding: 10rpx;
          background-color: #f7f7f8;
          color: #8d8d8d;
          font-size: 24rpx;
        }

        .price {
          display: flex;
          margin-top: 10rpx;
          justify-content: space-between;
          font-size: 24rpx;
        }
      }
    }

    .payPrice {
      display: flex;
      justify-content: space-between;
      font-size: 25rpx;
      color: #787878;
      margin-bottom: 20rpx;
    }
  }

  .payment {
    background-color: #00cca8;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f0fbf9;
    height: auto;
    padding-bottom: 40rpx;
    padding-left: 20rpx;

    .paytitle {
      font-size: 35rpx;
      margin-top: 20rpx;
    }

    .payTime {
      font-size: 26rpx;
      margin-top: 30rpx;
    }

    .payBtn {
      margin-top: 30rpx;
      width: 300rpx;
      height: 60rpx;
      background-color: #ffffff;
      color: #27ba9b;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40rpx;
    }
  }

  .address {
    background-color: #ffffff;
    margin: 20rpx;
    padding: 20rpx;
    display: flex;
    align-items: center;
    height: auto;
    border-radius: 10rpx;

    .address-one {
      flex: 1;
      margin-left: 20rpx;

      .name {
        color: #444444;
        font-size: 28rpx;
      }

      .ress {
        color: #9a9a9a;
        font-size: 26rpx;
        margin-top: 10rpx;
      }
    }
  }
}

.navbar {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 9;
  background-color: transparent;

  .title {
    margin: auto;
    height: 44px;
    color: transparent;
  }

  .back {
    color: #ffffff;
  }
}
</style>
