<script setup lang="ts">
import { computed, ref } from 'vue'
import { getCategoryTopAPI } from '@/api/category'
import type { categoryType } from '@/types/category'
import Swiper from '@/components/swiper.vue'
import { onLoad } from '@dcloudio/uni-app'
import categorySkeleton from './categorySkeleton.vue'
const activeIndex = ref(0)
const categoryList = ref<categoryType[]>([])
const getCategoryList = async () => {
  const res = await getCategoryTopAPI()
  categoryList.value = res.result
  console.log(res)
}
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children || []
})
const isFinish = ref(false)
const swiperRef = ref()
onLoad(async () => {
  await Promise.all([getCategoryList()])
  isFinish.value = true
})
const onScrolltolower = () => {}
</script>

<template>
  <view class="category" v-if="isFinish">
    <view class="search">
      <!-- <uni-icons type="search" size="30"></uni-icons> -->
      &nbsp;&nbsp;
      <text class="text">女靴</text>
    </view>
    <view class="categories">
      <scroll-view scroll-Y class="scroll-one">
        <view
          class="primary"
          :key="item.id"
          v-for="(item, index) in categoryList"
          :class="{ active: activeIndex === index }"
          @click="activeIndex = index"
        >
          <text class="text">{{ item.name }}</text>
        </view>
      </scroll-view>
      <scroll-view scroll-Y class="scroll-tow" @scrolltolower="onScrolltolower">
        <view style="height: 300rpx">
          <Swiper ref="swiperRef"></Swiper>
        </view>
        <view class="secondary" v-for="item in subCategoryList" :key="item.id">
          <view class="text">
            <text class="title">{{ item.name }}</text>
            <text class="span">全部></text>
          </view>
          <view class="children">
            <view class="item" v-for="i in item.goods" :key="i.id">
              <img class="img" :src="i.picture" alt="" />
              <text class="name">{{ i.name }}</text>
              <text class="price"> ￥{{ i.price }} </text>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
  <categorySkeleton v-else></categorySkeleton>
</template>

<style lang="scss">
.category {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f6f6f6;
  box-sizing: border-box;

  .search {
    display: flex;
    align-items: center;
    background-color: #f3f4f4;
    border-radius: 40rpx;
    padding: 20rpx;
    box-sizing: border-box;
    margin: 0 20rpx;
    color: #8b8b8b;
  }

  .categories {
    flex: 1;
    display: flex;
    margin-top: 10rpx;
    width: 100%;
    min-height: 400rpx;

    .scroll-one {
      width: 180rpx;
      flex: none;
      overflow: hidden;
      // height: 100%;

      .primary {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100rpx;
        position: relative;
        transition: 0.5s all;

        &::after {
          content: '';
          position: absolute;
          left: 42rpx;
          bottom: 0;
          width: 96rpx;
          border-top: 1rpx solid #e3e4e7;
        }
      }

      .active {
        background-color: #e3eae8;
        border-left: 2rpx solid #27ba9b;
      }
    }

    .scroll-tow {
      flex: 1;
      padding: 0 10rpx;
      box-sizing: border-box;
      background-color: #e3eae8;

      .secondary {
        margin: 20rpx 0;

        .text {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .title {
            font-size: 34rpx;
          }

          .span {
            font-size: 30rpx;
            color: #9c9c9c;
          }
        }

        .children {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20rpx;

          .item {
            width: 150rpx;
            margin-right: 10rpx;

            .img {
              width: 150rpx;
              height: 150rpx;
            }

            .name {
              color: #333333;
              margin: 5rpx 0;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 1.5em;
              font-size: 28rpx;
            }

            .price {
              color: #cf4444;
              font-size: 25rpx;
            }
          }
        }
      }
    }
  }
}
</style>
