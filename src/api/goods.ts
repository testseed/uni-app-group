import { request } from '@/utils/request'
import type { GoodsResult } from '@/types/goods'
export const getGoodsAPI = (id: string) => {
  return request<GoodsResult>({
    url: '/goods',
    method: 'GET',
    data: {
      id,
    },
  })
}
