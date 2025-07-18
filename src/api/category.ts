import { request } from '@/utils/request'
import type { categoryType } from '@/types/category'
export const getCategoryTopAPI = () => {
  return request<categoryType[]>({
    url: '/category/top',
    method: 'GET',
  })
}
