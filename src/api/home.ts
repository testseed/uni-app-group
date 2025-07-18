import { request } from '@/utils/request'
import type {
  homeBannerType,
  homeCategoryMutliType,
  homeHotMutliType,
  homeGoodsGuessLikeType,
} from '@/types/home'
export const getHomeBannerAPI = (distributionSite: number | string) => {
  return request<homeBannerType[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      distributionSite,
    },
  })
} //获取轮播图广告区域

export const getHomeCategoryMutliAPI = () => {
  return request<homeCategoryMutliType[]>({
    url: '/home/category/mutli',
    method: 'GET',
  })
} //获取前台分类数据

export const getHomeHotMutliAPI = () => {
  return request<homeHotMutliType[]>({
    url: '/home/hot/mutli',
    method: 'GET',
  })
} //获取热门推荐数据

type pageType = {
  page: number
  pageSize: number
}
export const getHomeGoodsGuessLikeAPI = (data: pageType) => {
  return request<homeGoodsGuessLikeType>({
    url: '/home/goods/guessLike',
    method: 'GET',
    data,
  })
} //获取猜你喜欢数据
