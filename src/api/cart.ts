import { request } from '@/utils/request'
import type { memberCartType } from '@/types/cart'
export const postMemberCartAPI = (skuId: string, count: number) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

export const getMemberCartAPI = () => {
  return request<memberCartType[]>({
    url: '/member/cart',
    method: 'GET',
  })
}

export const putMemberCartSkuIdAPI = (
  skuId: string,
  data: {
    selected?: boolean
    count?: number
  },
) => {
  return request({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data,
  })
}

export const putMemberCartSelectedAPI = (selected: boolean) => {
  return request({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected,
    },
  })
}
