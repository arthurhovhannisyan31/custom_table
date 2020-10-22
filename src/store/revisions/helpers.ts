// helpers
import { TSort } from '_/store/revisions/types'
import { EFilterOrder } from '_/store/types'

export const handlePagination = (
  arr: Record<string, number | string>[],
  start: number,
  end: number
) => {
  if (!arr) return []
  return arr.slice(start, end)
}
export const numberSort = (name: string, reverse: boolean) => (
  a: Record<string, number | string>,
  b: Record<string, number | string>
) => {
  return reverse
    ? (b[name] as number) - (a[name] as number)
    : (a[name] as number) - (b[name] as number)
}

export const stringSort = (name: string, reverse: boolean) => (
  a: Record<string, number | string>,
  b: Record<string, number | string>
) => {
  return reverse
    ? (b[name] as string).localeCompare(a[name] as string)
    : (a[name] as string).localeCompare(b[name] as string)
}
export const dateSort = (name: string, reverse: boolean) => (
  a: Record<string, number | string>,
  b: Record<string, number | string>
) => {
  const dateA = new Date(a[name] as string)
  const dateB = new Date(b[name] as string)
  if (reverse) return dateB <= dateA ? -1 : 1
  return dateA <= dateB ? -1 : 1
}
export const handleSort = (
  arr: Record<string, number | string>[],
  sort: TSort
) => {
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
