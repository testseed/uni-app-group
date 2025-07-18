import { request } from '@/utils/request'
import type { loginWxminType } from '@/types/login'
type WXloginType = {
  code: string
  encryptedData: string
  iv: string
}
export const getLoginWxMinAPI = (data: WXloginType) => {
  return request<loginWxminType>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}
export const getLoginWxMinSimple = (phoneNumber: string) => {
  return request<loginWxminType>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data: {
      phoneNumber,
    },
  })
}
type loginType = {
  account: string
  password: string
}
export const getLoginAPi = (data: loginType) => {
  return request({
    url: '/login',
    method: 'POST',
    data,
  })
}
