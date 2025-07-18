import { request } from '@/utils/request'
import type { memberAddressType } from '@/types/address'
export const postMemberAddressAPI = (data: memberAddressType) => {
  return request({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

export const getMemberAddressAPI = () => {
  return request({
    url: '/member/address',
    method: 'GET',
  })
}

export const getMemberAddressIdAPI = (id?: string) => {
  return request<memberAddressType>({
    url: `/member/address/${id}`,
    methwd: 'GET',
  })
}
export const putMemberAddressIdAPI = (data: memberAddressType, id?: string) => {
  return request({
    url: `/member/address/${id}`,
    method: 'PUT',
    data,
  })
}

export const deleteMemberAddressIdAPI = (id?: string) => {
  return request({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
