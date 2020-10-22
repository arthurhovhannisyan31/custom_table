export type TRow = Record<string, string | number>

export interface IColumn {
  name: string
  title: string
  format?: <T>(val: T) => T
}

export interface ICell {
  name: string
  value: string
}

export interface ICellProps extends Partial<ICell> {
  column?: string
}

export enum EFilterOrder {
  asc = 'asc',
  desc = 'desc',
}
