// helpers
import {
  GET_REVISIONS_REQUEST,
  GET_REVISIONS_SUCCESS,
} from '_/store/revisions/constants'

// eslint-disable-next-line
export const getRevisions = () => ({
  type: GET_REVISIONS_REQUEST,
})

// todo fix types
export const setRevisions = (payload: any) => ({
  type: GET_REVISIONS_SUCCESS,
  payload,
})
