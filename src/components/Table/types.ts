// todo move to store folders

export interface IColumn {
  name: string
  title: string
}

// todo mb generate type
export interface IRow {
  revision: number
  revstmp: string
  user_id: number
  user_email: string
  user_name: string
  well_id: string
  well_name: string
  well_type: string
  changes_summary: string
}

export interface ICell {
  name: string
  value: string
}

export interface ICellProps extends Partial<ICell> {
  column?: string
}

export interface IFilter {
  page: number
  rowsPerPage: number
  sort: { name: string; value: string }[]
}
