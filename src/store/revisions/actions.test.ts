// helpers
import {
  GET_REVISIONS_REQUEST,
  GET_REVISIONS_SUCCESS,
} from '_/store/revisions/constants'
import { setRevisions, getRevisions } from '_/store/revisions/actions'

describe('revisions action creators test', () => {
  test(`returns an action with type ${GET_REVISIONS_REQUEST}`, () => {
    const action = getRevisions()
    const expectedAction = { type: GET_REVISIONS_REQUEST }
    expect(action).toEqual(expectedAction)
  })
  test(`returns an action with type ${GET_REVISIONS_SUCCESS}`, () => {
    const payload = {
      total: 0,
      limit: 0,
      offset: 0,
      data: [],
    }
    const action = setRevisions(payload)
    const expectedAction = { type: GET_REVISIONS_SUCCESS, payload }
    expect(action).toEqual(expectedAction)
  })
})
