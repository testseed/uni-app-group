export type homeBannerType = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: string
}

export type homeCategoryMutliType = {
  id: string
  name: string
  icon: string
}

export type homeHotMutliType = {
  id: string
  alt: string
  target: string
  title: string
  type: string
  pictures: string[]
}

export type guessItemType = {
  id: string
  name: string
  desc: string
  price: number
  picture: string
  discount: number
  orderNum: number
}
export type homeGoodsGuessLikeType = {
  counts: number
  pageSize: number
  pages: number
  page: number
  items: guessItemType[]
}
