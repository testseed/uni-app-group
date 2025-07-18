import { request } from '@/utils/request'
import type { memberProfileType, memberDataType } from '@/types/member'
export const getMemberProfileAPI = () => {
  return request<memberProfileType>({
    url: '/member/profile',
    method: 'GET',
  })
}

export const putMemberProfileAPI = (data: memberDataType) => {
  return request({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
