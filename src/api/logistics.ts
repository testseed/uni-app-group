import { request } from '@/utils/request'

//发货
export const getConsignmentAPI = (id: string) => {
  return request({
    url: `/member/order/consignment/${id}`,
    method: 'GET',
  })
}
//确认收货
export const getIdReceiptAPI = (id: string) => {
  return request({
    url: `/member/order/${id}/receipt`,
    method: 'GET',
  })
}
//删除订单
export const deleteOrderAPI = (ids: string[]) => {
  return request({
    url: '/member/order',
    method: 'DELETE',
    data: {
      ids,
    },
  })
}
//取消订单
export const putOrderAPI = (id: string, cancelReason: string) => {
  return request({
    url: `/member/order/${id}/cancel`,
    method: 'PUT',
    data: {
      cancelReason,
    },
  })
}

export const getMemberOrderAPI = (page: number, pageSize: number, orderState: number) => {
  return request({
    url: '/member/order',
    method: 'GET',
    data: {
      page,
      pageSize,
      orderState,
    },
  })
}
