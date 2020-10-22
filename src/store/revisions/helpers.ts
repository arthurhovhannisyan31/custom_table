// helpers
import { TSort, TRevision, TRevisionKeys } from '_/store/revisions/types'
import { EFilterOrder } from '_/store/types'

export const handlePagination = (
  arr: TRevision[],
  start: number,
  end: number
) => {
  if (!arr) return []
  return arr.slice(start, end)
}
export const numberSort = (name: string, reverse: boolean) => (
  a: TRevision,
  b: TRevision
) => {
  return reverse
    ? (b[name as TRevisionKeys] as number) -
        (a[name as TRevisionKeys] as number)
    : (a[name as TRevisionKeys] as number) -
        (b[name as TRevisionKeys] as number)
}

export const stringSort = (name: string, reverse: boolean) => (
  a: TRevision,
  b: TRevision
) => {
  return reverse
    ? (b[name as TRevisionKeys] as string).localeCompare(
        a[name as TRevisionKeys] as string
      )
    : (a[name as TRevisionKeys] as string).localeCompare(
        b[name as TRevisionKeys] as string
      )
}
export const dateSort = (name: string, reverse: boolean) => (
  a: TRevision,
  b: TRevision
) => {
  const dateA = new Date(a[name as TRevisionKeys] as string)
  const dateB = new Date(b[name as TRevisionKeys] as string)
  if (reverse) return dateB <= dateA ? -1 : 1
  return dateA <= dateB ? -1 : 1
}
export const handleSort = (arr: TRevision[], sort: TSort) => {
  const isReverse = sort.order === EFilterOrder.desc
  switch (sort.type as string) {
    case 'number':
      return arr.sort(numberSort(sort.name as string, isReverse))
    case 'string': {
      return arr.sort(stringSort(sort.name as string, isReverse))
    }
    case 'date':
      return arr.sort(dateSort(sort.name as string, isReverse))
    default:
      return arr
  }
}
