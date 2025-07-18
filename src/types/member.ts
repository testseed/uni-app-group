export type memberProfileType = {
  id: string
  avatar: string
  nickname: string
  account: string
  gender: Gender
  birthday: string
  fullLocation: string
  profession: string
}
export type Gender = '女' | '男'

export type memberDataType = {
  nickname: string
  gender: string
  birthday: string
  profession?: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
  fullLocation?: string
}
