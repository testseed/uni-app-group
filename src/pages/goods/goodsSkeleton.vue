<script setup lang="ts">
//
</script>

<template>
  <view class="sk-container">
    <scroll-view
      scroll-y="true"
      class="viewport viewport data-v-e000afeb data-v-e000afeb"
      enable-back-to-top="true"
    >
      <view class="goods goods data-v-e000afeb data-v-e000afeb">
        <view class="preview preview data-v-e000afeb data-v-e000afeb">
          <swiper
            circular="true"
            class="data-v-e000afeb data-v-e000afeb"
            current="0"
            autoplay="false"
          >
            <swiper-item
              class="data-v-e000afeb data-v-e000afeb"
              style="
                position: absolute;
                width: 100%;
                height: 100%;
                transform: translate(0%, 0px) translateZ(0px);
              "
            >
              <image class="data-v-e000afeb sk-image" mode="aspectFill"></image>
            </swiper-item>
          </swiper>
          <view class="indicator indicator data-v-e000afeb data-v-e000afeb">
            <text class="current data-v-e000afeb sk-transparent sk-opacity">1</text>
            <text class="split data-v-e000afeb sk-transparent sk-opacity">/</text>
            <text class="total data-v-e000afeb sk-transparent sk-opacity">5</text>
          </view>
        </view>
        <view class="meta meta data-v-e000afeb data-v-e000afeb">
          <view class="price price data-v-e000afeb data-v-e000afeb">
            <text class="symbol data-v-e000afeb sk-transparent sk-opacity">¥</text>
            <text class="number data-v-e000afeb sk-transparent sk-text-14-2857-77 sk-text"
              >29.90</text
            >
          </view>
          <view class="name ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-826 sk-text"
            >冻干藤椒豚骨面74克*12盒
          </view>
          <view class="desc data-v-e000afeb sk-transparent sk-text-0-0000-133 sk-text"
            >日式风味，汤浓肉鲜，椒麻过瘾app</view
          >
        </view>
        <view class="action action data-v-e000afeb data-v-e000afeb">
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-947 sk-text"
              >选择</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-667 sk-text">
              请选择商品规格
            </text>
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-159 sk-text"
              >送至</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-548 sk-text">
              请选择收获地址
            </text>
          </view>
          <view class="item arrow data-v-e000afeb sk-pseudo sk-pseudo-circle">
            <text class="label data-v-e000afeb sk-transparent sk-text-14-2857-340 sk-text"
              >服务</text
            >
            <text class="text ellipsis data-v-e000afeb sk-transparent sk-text-14-2857-545 sk-text">
              无忧退 快速退款 免费包邮
            </text>
          </view>
        </view>
      </view>
      <view class="detail detail panel panel data-v-e000afeb data-v-e000afeb">
        <view class="title title data-v-e000afeb data-v-e000afeb">
          <text class="data-v-e000afeb sk-transparent sk-text-0-0000-883 sk-text">详情</text>
        </view>
        <view class="content content data-v-e000afeb data-v-e000afeb">
          <view class="properties properties data-v-e000afeb data-v-e000afeb">
            <view class="item item data-v-e000afeb data-v-e000afeb">
              <text class="label data-v-e000afeb sk-transparent sk-text-25-0000-980 sk-text"
                >品名</text
              >
              <text class="value data-v-e000afeb sk-transparent sk-text-25-0000-110 sk-text"
                >冻干藤椒豚骨面</text
              >
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <view class="toolbar toolbar data-v-e000afeb data-v-e000afeb" style="padding-bottom: 34px">
      <view class="icons icons data-v-e000afeb data-v-e000afeb">
        <button
          class="icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"
        >
          <text class="icon-heart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>收藏
        </button>
        <button
          class="icons-button data-v-e000afeb sk-transparent sk-button sk-pseudo sk-pseudo-circle"
          open-type="contact"
        >
          <text class="icon-handset data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>客服
        </button>
        <navigator class="icons-button data-v-e000afeb sk-transparent" open-type="switchTab">
          <text class="icon-cart data-v-e000afeb sk-pseudo sk-pseudo-circle"></text>购物车
        </navigator>
      </view>
      <view class="buttons buttons data-v-e000afeb data-v-e000afeb">
        <view
          class="addcart data-v-e000afeb sk-transparent sk-text-32-4324-423 sk-text"
          style="background-position-x: 50%"
        >
          加入购物车
        </view>
        <view
          class="buynow data-v-e000afeb sk-transparent sk-text-32-4324-219 sk-text"
          style="background-position-x: 50%"
        >
          立即购买
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-77 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 78.0769rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-826 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-0-0000-133 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 23.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-947 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-667 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-159 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-548 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-340 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-545 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-0-0000-883 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 26.9231rpx;
  position: relative !important;
}

.sk-text-25-0000-980 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}

.sk-text-25-0000-110 {
  background-image: linear-gradient(
    transparent 25%,
    #eeeeee 0%,
    #eeeeee 75%,
    transparent 0%
  ) !important;
  background-size: 100% 50rpx;
  position: relative !important;
}

.sk-text-32-4324-423 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-text-32-4324-219 {
  background-image: linear-gradient(
    transparent 32.4324%,
    #eeeeee 0%,
    #eeeeee 67.5676%,
    transparent 0%
  ) !important;
  background-size: 100% 71.1538rpx;
  position: relative !important;
}

.sk-button {
  color: #efefef !important;
  background: #efefef !important;
  border: none !important;
  box-shadow: none !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
