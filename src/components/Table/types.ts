import { EFilterOrder } from '_/store/types'
// todo move to store folders

export interface IColumn {
  name: string
  title: string
}

export interface ICell {
  name: string
  value: string
}

export interface ICellProps extends Partial<ICell> {
  column?: string
}
