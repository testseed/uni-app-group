<script setup lang="ts">
//
</script>

<!--
此文件为开发者工具生成，生成时间: 2025/7/11下午8:04:54
使用方法：
在 C:\Users\种子\Desktop\小程序\heima-shop\dist\dev\mp-weixin\pages\category\category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 C:\Users\种子\Desktop\小程序\heima-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="category category">
      <view class="search sk-transparent">
        <text class="text sk-transparent sk-text-14-2857-725 sk-text">女靴</text>
      </view>
      <view class="categories categories">
        <scroll-view scroll-y="true" class="scroll-one scroll-one">
          <view class="primary active sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-391 sk-text">居家</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-167 sk-text">美食</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-651 sk-text">服饰</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-720 sk-text">母婴</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-175 sk-text">个护</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-130 sk-text">严选</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-525 sk-text">数码</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-313 sk-text">运动</text>
          </view>
          <view class="primary sk-pseudo sk-pseudo-circle">
            <text class="text sk-transparent sk-text-14-2857-359 sk-text">杂项</text>
          </view>
        </scroll-view>
        <scroll-view scroll-y="true" class="scroll-tow scroll-tow">
          <view style="height: 156px">
            <view is="components/swiper" current="0" autoplay="false">
              <view class="view-swiper swiper--view-swiper data-v-1e3504a7 swiper--data-v-1e3504a7">
                <swiper
                  circular="true"
                  autoplay="false"
                  class="swiper swiper--swiper data-v-1e3504a7 swiper--data-v-1e3504a7"
                  duration="500"
                  indicator-dots="true"
                  interval="2000"
                  current="0"
                ></swiper>
              </view>
            </view>
          </view>
          <view class="secondary secondary">
            <view class="text text">
              <text class="title sk-transparent sk-text-14-2857-93 sk-text">居家生活用品</text>
              <text class="span sk-transparent sk-text-14-2857-257 sk-text">全部&gt;</text>
            </view>
            <view class="children children">
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-803 sk-text"
                  >钻石陶瓷涂层多用锅18cm 小奶锅</text
                >
                <text class="price sk-transparent sk-text-14-2857-898 sk-text"> ￥149.00</text>
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-376 sk-text"
                  >极光限定 珠光蓝珐琅锅</text
                >
                <text class="price sk-transparent sk-text-14-2857-843 sk-text"> ￥199.00</text>
              </view>
            </view>
          </view>
          <view class="secondary secondary">
            <view class="text text">
              <text class="title sk-transparent sk-text-14-2857-192 sk-text">收纳</text>
              <text class="span sk-transparent sk-text-14-2857-399 sk-text">全部&gt;</text>
            </view>
            <view class="children children">
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-188 sk-text"
                  >给衣柜减减肥，真空防潮压缩袋</text
                >
                <text class="price sk-transparent sk-text-14-2857-93 sk-text"> ￥79.00</text>
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-647 sk-text"
                  >爆款明星好物，抽屉式透明储物柜</text
                >
                <text class="price sk-transparent sk-text-14-2857-964 sk-text"> ￥129.00</text>
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-299 sk-text"
                  >衣柜省空间神器，棉麻涤·收纳挂袋</text
                >
                <text class="price sk-transparent sk-text-14-2857-955 sk-text"> ￥55.00</text>
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-375 sk-text"
                  >换季好帮手，大容量防尘衣物收纳袋</text
                >
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-986 sk-text"
                  >可水洗的布艺收纳盒</text
                >
              </view>
              <view class="item item">
                <image class="img sk-image"></image>
                <text class="name sk-transparent sk-text-16-6667-103 sk-text"
                  >开发员自留款，带滚轮双层脏衣篓</text
                >
              </view>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
/*
此文件为开发者工具生成，生成时间: 2025/7/11下午8:04:54

在 C:\Users\种子\Desktop\小程序\heima-shop\dist\dev\mp-weixin\pages\category\category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-725 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-391 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-167 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-651 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-720 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-175 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-130 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-525 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-313 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-359 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.0769rpx;
  position: relative !important;
}

.sk-text-14-2857-93 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.7692rpx;
  position: relative !important;
}

.sk-text-14-2857-257 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-16-6667-803 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-14-2857-898 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-16-6667-376 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-14-2857-843 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-14-2857-192 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 45.7692rpx;
  position: relative !important;
}

.sk-text-14-2857-399 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-16-6667-188 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-16-6667-647 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-14-2857-964 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-16-6667-299 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-14-2857-955 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35rpx;
  position: relative !important;
}

.sk-text-16-6667-375 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-16-6667-986 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
}

.sk-text-16-6667-103 {
  background-image: linear-gradient(
    transparent 16.6667%,
    #eeeeee 0%,
    #eeeeee 83.3333%,
    transparent 0%
  ) !important;
  background-size: 100% 40.3846rpx;
  position: relative !important;
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
