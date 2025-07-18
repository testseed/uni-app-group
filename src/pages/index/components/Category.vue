<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { getHomeCategoryMutliAPI } from '@/api/home'
import type { homeCategoryMutliType } from '@/types/home'
import { ref } from 'vue'
const categoryList = ref<homeCategoryMutliType[]>([])
const getCategoryList = async () => {
  const res = await getHomeCategoryMutliAPI()
  categoryList.value = res.result
}
onLoad(() => {
  getCategoryList()
})
defineExpose({
  getCategoryList,
})
</script>

<template>
  <view class="category">
    <view class="item-category" v-for="item in categoryList" :key="item.id">
      <image class="icon" :src="item.icon" />
      <text class="text">{{ item.name }}</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.category {
  margin-top: 20rpx;
  display: flex;
  flex-wrap: wrap;
  min-height: 328rpx;

  .item-category {
    width: 150rpx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;

    .icon {
      width: 100rpx;
      height: 100rpx;
    }

    .text {
      font-size: 26rpx;
    }
  }
}
</style>
