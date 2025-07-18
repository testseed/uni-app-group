export type hotListType = {
  title: string
  id: string
  bannerPicture: string
  subTypes: subTypesType[]
}
export type subTypesType = {
  id: string
  title: string
  goodsItems: goodsItemsType
}
export type goodsItemsType = {
  counts: string | number
  pages: number
  page: number
  pageSize: number
  items: itemsType[]
}

export type itemsType = {
  desc: string
  id: string
  name: string
  picture: string
  price: number
}
