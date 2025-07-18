export type memberAddressType = {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: isDefault
  id?: string
  fullLocation?: string
}
type isDefault = 0 | 1
