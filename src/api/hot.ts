import { request } from '@/utils/request'
import type { hotListType } from '@/types/hot'
type hotSubType = {
  subType?: string | number
  pageSize: number
  page: number
}
export const getHotListAPI = (url: string, data: hotSubType) => {
  return request<hotListType>({
    url,
    method: 'GET',
    data,
  })
}
