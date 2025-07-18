import { request } from '@/utils/request'
import type { OrderResult } from '@/types/detail'
export const getMemberOrderIdAPI = (id: string) => {
  return request<OrderResult>({
    url: `/member/order/${id}`,
    method: 'GET',
  })
}
