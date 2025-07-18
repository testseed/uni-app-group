export type memberOrderPreType = {
  userAddresses: userAddressesType[]
  goods: goodsType[]
  summary: {
    goodsCount: number
    totalPrice: number
    totalPayPrice: number
    postFee: number
    discountPrice: number
  }
}

type isDefault = 1 | 0
export type userAddressesType = {
  id: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: isDefault
  receiver: string
  contact: string
  fullLocation: string
  postalCode: string
}

export type goodsType = {
  id: string
  name: string
  picture: string
  count: string
  skuId: string
  attrsText: string
  price: number
  payPrice: number
  totalPrice: number
  totalPayPrice: number
}
