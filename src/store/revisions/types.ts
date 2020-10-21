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

export interface IAction {
  type: string
  payload: any
}
