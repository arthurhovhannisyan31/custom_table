// types
import { EFilterOrder } from '_/store/types'

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

export type TRevisionKeys =
  | 'revision'
  | 'revstmp'
  | 'user_id'
  | 'user_email'
  | 'user_name'
  | 'well_id'
  | 'well_name'
  | 'well_type'
  | 'changes_summary'

export type TRevision = Record<TRevisionKeys, number | string>

export type TRevisionPayload = Record<string, number | string | TRevision[]>

export interface IAction {
  type: string
  payload?: TRevisionPayload
}

export type TSort = Record<string, string | EFilterOrder>

export interface IRevisionsFilterProps {
  limit: number
  offset: number
  sort: TSort
}
