<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { computed, ref } from 'vue'
import { getGoodsAPI } from '../../api/goods'
import type { GoodsResult } from '../../types/goods'
import ServicePanel from './components/ServicePanel.vue'
import goodsSkeleton from './goodsSkeleton.vue'
import { postMemberCartAPI } from '@/api/cart'
import vkDataGoodsSku from '@/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.vue'
const address = ref('')
const { safeAreaInsets } = uni.getSystemInfoSync()
const currentIndex = ref(1)
const id = ref()
const onChange = (e: any) => {
  currentIndex.value = e.detail.current + 1
}
const previewImage = (url: string) => {
  uni.previewImage({
    current: url, // 当前显示图片的http链接
    urls: goodsList.value!.mainPictures,
  })
}
const goodsList = ref<GoodsResult>()
const isFinish = ref(false)
const getGoodsList = async () => {
  const res = await getGoodsAPI(id.value)
  console.log(res)
  goodsList.value = res.result
  localdata.value = {
    _id: res.result.id,
    name: res.result.name,
    goods_thumb: res.result.mainPictures[0],
    sku_list: res.result.skus.map((item) => ({
      _id: item.id,
      goods_id: res.result.id,
      goods_name: res.result.name,
      image: item.picture,
      price: item.price,
      sku_name_arr: item.specs.map((i) => i.valueName),
      stock: item.inventory,
    })),
    spec_list: res.result.specs.map((item) => ({
      name: item.name,
      list: item.values,
    })),
  }
}
const popup = ref()
const open = () => {
  if (popup.value) {
    popup.value.open('bottom')
  } else {
    console.log('组件实例没有准备好')
  }
}
onLoad(async (options: any) => {
  id.value = options.id
  await Promise.all([getGoodsList()])
  isFinish.value = true
})
const skuPopup = ref()
const skuKey = ref(false)
const localdata = ref()
const mode = ref(2)
const selectArrText = computed(() => {
  return skuPopup.value?.selectArr?.join(' ').trim() || '请选择商品规格'
})
const closeSku = (val: number) => {
  skuKey.value = true
  mode.value = val
}
const cart = async (selectShop: any) => {
  // console.log(selectShop);
  const res = await postMemberCartAPI(selectShop._id, selectShop.buy_num)
  console.log(res)
  uni.showToast({
    title: '添加成功',
    icon: 'success',
  })
  skuKey.value = false
}
const buy = (selectShop: any) => {
  console.log(selectShop)
  uni.navigateTo({
    url: `/pages/order/order?skuId=${selectShop._id}&count=${selectShop.buy_num}`,
  })
}
const goAddress = () => {
  uni.navigateTo({
    url: '/page/address',
  })
}
</script>

<template>
  <view v-if="isFinish">
    <vkDataGoodsSku
      @cart="cart"
      @buy="buy"
      ref="skuPopup"
      v-model="skuKey"
      :z-index="990"
      :localdata="localdata"
      :mode="mode"
    >
    </vkDataGoodsSku>
    <scroll-view scroll-y class="viewport">
      <!-- 基本信息 -->
      <view class="goods">
        <!-- 商品主图 -->
        <view class="preview">
          <swiper autoplay @change="onChange" circular>
            <swiper-item v-for="item in goodsList?.mainPictures" :key="item">
              <image @click="previewImage(item)" mode="aspectFill" :src="item" />
            </swiper-item>
          </swiper>
          <view class="indicator">
            <text class="current">{{ currentIndex }}</text>
            <text class="split">/</text>
            <text class="total">5</text>
          </view>
        </view>

        <!-- 商品简介 -->
        <view class="meta">
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">29.90</text>
          </view>
          <view class="name ellipsis">{{ goodsList?.name }} </view>
          <view class="desc"> {{ goodsList?.desc }} </view>
        </view>

        <!-- 操作面板 -->
        <view class="action">
          <view class="item arrow" @click="closeSku(1)">
            <text class="label">选择</text>
            <text class="text ellipsis"> {{ selectArrText }} </text>
          </view>
          <view class="item arrow" @click="goAddress">
            <text class="label">送至</text>
            <text class="text ellipsis"> {{ address === '' ? '请选择收货地址' : address }} </text>
          </view>
          <view class="item arrow" @click="open">
            <text class="label">服务</text>
            <text class="text ellipsis"> 无忧退 快速退款 免费包邮 </text>
          </view>
        </view>
      </view>

      <!-- 商品详情 -->
      <view class="detail panel">
        <view class="title">
          <text>详情</text>
        </view>
        <view class="content">
          <view class="properties">
            <!-- 属性详情 -->
            <view class="item" v-for="item in goodsList?.details.properties" :key="item.name">
              <text class="label">{{ item.name }}</text>
              <text class="value">{{ item.value }}</text>
            </view>
          </view>
          <!-- 图片详情 -->
          <image mode="widthFix" v-for="item in goodsList?.mainPictures" :key="item" :src="item">
          </image>
        </view>
      </view>

      <!-- 同类推荐 -->
      <view class="similar panel">
        <view class="title">
          <text>同类推荐</text>
        </view>
        <view class="content">
          <navigator
            v-for="item in goodsList?.similarProducts"
            :key="item"
            class="goods"
            hover-class="none"
            :url="`/pages/goods/goods?id=`"
          >
            <image class="image" mode="aspectFill" :src="item.picture"></image>
            <view class="name ellipsis">{{ item.name }}</view>
            <view class="price">
              <text class="symbol">¥</text>
              <text class="number">{{ item.price }}</text>
            </view>
          </navigator>
        </view>
      </view>
    </scroll-view>

    <!-- 用户操作 -->
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      <view class="icons">
        <button class="icons-button"><text class="icon-heart"></text>收藏</button>
        <button class="icons-button" open-type="contact">
          <text class="icon-handset"></text>客服
        </button>
        <navigator class="icons-button" url="/pages/cart/cart" open-type="switchTab">
          <text class="icon-cart"></text>购物车
        </navigator>
      </view>
      <view class="buttons">
        <view class="addcart" @click="closeSku(2)"> 加入购物车 </view>
        <view class="buynow" @click="closeSku(3)"> 立即购买 </view>
      </view>
      <uni-popup ref="popup" type="bottom" border-radius="10px 10px 0 0">
        <ServicePanel></ServicePanel>
      </uni-popup>
    </view>
  </view>
  <view v-else>
    <goodsSkeleton></goodsSkeleton>
  </view>
</template>

<style lang="scss" scoped>
page {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.viewport {
  background-color: #f4f4f4;
}

.panel {
  margin-top: 20rpx;
  background-color: #fff;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 90rpx;
    line-height: 1;
    padding: 30rpx 60rpx 30rpx 6rpx;
    position: relative;

    text {
      padding-left: 10rpx;
      font-size: 28rpx;
      color: #333;
      font-weight: 600;
      border-left: 4rpx solid #27ba9b;
    }

    navigator {
      font-size: 24rpx;
      color: #666;
    }
  }
}

.arrow {
  &::after {
    position: absolute;
    top: 50%;
    right: 30rpx;
    content: '\e6c2';
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}

/* 商品信息 */
.goods {
  background-color: #fff;

  .preview {
    height: 750rpx;
    position: relative;

    .image {
      width: 750rpx;
      height: 750rpx;
    }

    .indicator {
      height: 40rpx;
      padding: 0 24rpx;
      line-height: 40rpx;
      border-radius: 30rpx;
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      background-color: rgba(0, 0, 0, 0.3);
      position: absolute;
      bottom: 30rpx;
      right: 30rpx;

      .current {
        font-size: 26rpx;
      }

      .split {
        font-size: 24rpx;
        margin: 0 1rpx 0 2rpx;
      }

      .total {
        font-size: 24rpx;
      }
    }
  }

  .meta {
    position: relative;
    border-bottom: 1rpx solid #eaeaea;

    .price {
      height: 130rpx;
      padding: 25rpx 30rpx 0;
      color: #fff;
      font-size: 34rpx;
      box-sizing: border-box;
      background-color: #35c8a9;
    }

    .number {
      font-size: 56rpx;
    }

    .brand {
      width: 160rpx;
      height: 80rpx;
      overflow: hidden;
      position: absolute;
      top: 26rpx;
      right: 30rpx;
    }

    .name {
      max-height: 88rpx;
      line-height: 1.4;
      margin: 20rpx;
      font-size: 32rpx;
      color: #333;
    }

    .desc {
      line-height: 1;
      padding: 0 20rpx 30rpx;
      font-size: 24rpx;
      color: #cf4444;
    }
  }

  .action {
    padding-left: 20rpx;

    .item {
      height: 90rpx;
      padding-right: 60rpx;
      border-bottom: 1rpx solid #eaeaea;
      font-size: 26rpx;
      color: #333;
      position: relative;
      display: flex;
      align-items: center;

      &:last-child {
        border-bottom: 0 none;
      }
    }

    .label {
      width: 60rpx;
      color: #898b94;
      margin: 0 16rpx 0 10rpx;
    }

    .text {
      flex: 1;
      -webkit-line-clamp: 1;
    }
  }
}

/* 商品详情 */
.detail {
  padding-left: 20rpx;

  .content {
    margin-left: -20rpx;

    .image {
      width: 100%;
    }
  }

  .properties {
    padding: 0 20rpx;
    margin-bottom: 30rpx;

    .item {
      display: flex;
      line-height: 2;
      padding: 10rpx;
      font-size: 26rpx;
      color: #333;
      border-bottom: 1rpx dashed #ccc;
    }

    .label {
      width: 200rpx;
    }

    .value {
      flex: 1;
    }
  }
}

/* 同类推荐 */
.similar {
  .content {
    padding: 0 20rpx 200rpx;
    background-color: #f4f4f4;
    display: flex;
    flex-wrap: wrap;

    .goods {
      width: 340rpx;
      padding: 24rpx 20rpx 20rpx;
      margin: 20rpx 7rpx;
      border-radius: 10rpx;
      background-color: #fff;
    }

    .image {
      width: 300rpx;
      height: 260rpx;
    }

    .name {
      height: 80rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
    }

    .price {
      line-height: 1;
      font-size: 20rpx;
      color: #cf4444;
    }

    .number {
      font-size: 26rpx;
      margin-left: 2rpx;
    }
  }

  navigator {
    &:nth-child(even) {
      margin-right: 0;
    }
  }
}

/* 底部工具栏 */
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  height: 100rpx;
  padding: 0 20rpx var(--window-bottom);
  border-top: 1rpx solid #eaeaea;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;

  .buttons {
    display: flex;

    & > view {
      width: 220rpx;
      text-align: center;
      line-height: 72rpx;
      font-size: 26rpx;
      color: #fff;
      border-radius: 72rpx;
    }

    .addcart {
      background-color: #ffa868;
    }

    .buynow,
    .payment {
      background-color: #27ba9b;
      margin-left: 20rpx;
    }
  }

  .icons {
    padding-right: 10rpx;
    display: flex;
    align-items: center;
    flex: 1;

    .icons-button {
      flex: 1;
      text-align: center;
      line-height: 1.4;
      padding: 0;
      margin: 0;
      border-radius: 0;
      font-size: 20rpx;
      color: #333;
      background-color: #fff;

      &::after {
        border: none;
      }
    }

    text {
      display: block;
      font-size: 34rpx;
    }
  }
}
</style>
