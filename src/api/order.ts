import { request } from '@/utils/request'
import type { memberOrderPreType } from '@/types/order'
export const getMemberOrderPreAPI = () => {
  return request<memberOrderPreType>({
    url: '/member/order/pre',
    method: 'GET',
  })
}

export const getMemberOrderPreNowAPI = (data: {
  skuId: string
  count: string
  addressId?: string
}) => {
  return request<memberOrderPreType>({
    url: '/member/order/pre/now',
    method: 'GET',
    data,
  })
}

type goodsType = {
  skuId: string
  count: number
}

type payType = 1 | 2
type payChannel = 1 | 2
type orderBodyTyep = {
  goods: goodsType[]
  addressId: string
  deliveryTimeType: number
  buyerMessage: string
  payType: payType
  payChannel: payChannel
}

export const postMemberOrderAPI = (data: orderBodyTyep) => {
  return request<{
    id: string
  }>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}

export const getOrderListAPI = (orderState: number) => {
  return request({
    url: '/member/order',
    method: 'GET',
    data: {
      orderState,
    },
  })
}
