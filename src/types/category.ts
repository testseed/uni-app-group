export type categoryType = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: childrenType[]
}
export type childrenType = {
  id: string
  name: string
  picture: string
  parentId: null
  parentName: null
  goods: goodsType[]
  categories: null
  brands: null
  saleProperties: null
}
export type goodsType = {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  discount: string
  orderNum: string
}
