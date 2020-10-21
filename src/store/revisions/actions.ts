// helpers
import { GET_REVISIONS_REQUEST } from '_/store/revisions/constants'

export const getRevisions = () => ({
  type: GET_REVISIONS_REQUEST,
  payload: { test: 'test' },
})

export const test = () => {}
