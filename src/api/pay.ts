import { request } from '@/utils/request'

export type payType = {
  timeStamp: string
  signType: string
  package: string
  paySign: string
  nonceStr: string
  appId: string
}

export const getWxPayMiniPayAPi = (orderId: string) => {
  return request<payType>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data: {
      orderId,
    },
  })
}

export const getPayMockAPI = (orderId: string) => {
  return request({
    url: '/pay/mock',
    method: 'GET',
    data: {
      orderId,
    },
  })
}
