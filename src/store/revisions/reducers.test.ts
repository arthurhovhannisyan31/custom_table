// helpers
import {
  GET_REVISIONS_SUCCESS,
  GET_REVISIONS_ERROR,
  GET_REVISIONS_REQUEST,
} from '_/store/revisions/constants'
import revisionsReducer, { initState } from '_/store/revisions/reducers'

describe('test revisions reducer', () => {
  test(`returns updated state upon receiving an action of type ${GET_REVISIONS_REQUEST}`, () => {
    const action = { type: GET_REVISIONS_REQUEST }
    const resultingState = revisionsReducer(initState, action)
    const expectedState = { ...initState, error: false, loading: true }
    expect(expectedState).toEqual(resultingState)
  })
  test(`returns updated state upon receiving an action of type ${GET_REVISIONS_ERROR}`, () => {
    const action = { type: GET_REVISIONS_ERROR, payload: { message: 'Error' } }
    const resultingState = revisionsReducer(initState, action)
    const expectedState = {
      ...initState,
      error: { message: 'Error' },
      loading: false,
    }
    expect(expectedState).toEqual(resultingState)
  })
  test(`returns updated state upon receiving an action of type ${GET_REVISIONS_SUCCESS}`, () => {
    const payload = {
      limit: 5,
      offset: 0,
      total: 1,
      data: [
        {
          revision: 646119,
          revstmp: '2020-08-25T09:34:32.670+0000',
          user_id: 136,
          user_email: 'am+pi@rogii.com',
          user_name: 'A M',
          well_id: 'cbaa25da-b044-4afc-b074-d56422330740',
          well_name: 'well_220-test',
          well_type: 'laterals',
          changes_summary: 'DELETE dynamic_logs "Dynamic RHOB"',
        },
      ],
    }
    const action = { type: GET_REVISIONS_SUCCESS, payload }
    const resultState = revisionsReducer(initState, action)
    const expectedState = {
      loading: false,
      error: false,
      total: 1,
      data: {
        [`${payload?.offset}-${payload?.limit}`]: payload.data,
      },
    }
    expect(expectedState).toEqual(resultState)
  })
})
