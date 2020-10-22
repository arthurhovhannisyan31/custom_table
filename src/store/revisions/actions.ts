// helpers
import {
  GET_REVISIONS_REQUEST,
  GET_REVISIONS_SUCCESS,
} from '_/store/revisions/constants'
import { TRevisionPayload } from '_/store/revisions/types'

export const getRevisions = () => ({
  type: GET_REVISIONS_REQUEST,
})

export const setRevisions = (payload: TRevisionPayload) => ({
  type: GET_REVISIONS_SUCCESS,
  payload,
})
