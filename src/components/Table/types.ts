export type TRow = Record<string, string | number>

export type TFormatRow = <T>(val: T) => T

export interface IColumn {
  name: string
  title: string
  // todo fix types
  format?: (val: any) => any
}

export interface ICell {
  name: string
  value: string | number
}

export interface ICellProps extends Partial<ICell> {
  column?: string
}

export enum EFilterOrder {
  asc = 'asc',
  desc = 'desc',
}
