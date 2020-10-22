// types
import { EFilterOrder } from '_/store/types'

export interface IRevision {
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

export enum ERevisionTypes {
  revision = 'number',
  revstmp = 'date',
  user_id = 'number',
  user_email = 'string',
  user_name = 'string',
  well_id = 'string',
  well_name = 'string',
  well_type = 'string',
  changes_summary = 'string',
}

export interface IAction {
  type: string
  payload?: any
}

export type TSort = Record<string, string | EFilterOrder>

export interface IRevisionsFilterProps {
  limit: number
  offset: number
  sort: TSort
}
