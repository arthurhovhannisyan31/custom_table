// helpers
import {
  GET_REVISIONS_SUCCESS,
  GET_REVISIONS_ERROR,
  GET_REVISIONS_REQUEST,
} from '_/store/revisions/constants'
import revisionsReducer, { initState } from '_/store/revisions/reducers'
import { fetchTestData } from '_/store/revisions/queries'

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
  test(`returns updated state upon receiving an action of type ${GET_REVISIONS_SUCCESS}`, async () => {
    const props = { limit: 5, offset: 0, sort: {} }
    const { data, total } = await fetchTestData(props)
    const payload = {
      limit: props.limit,
      offset: props.offset,
      total,
      data,
    }
    const action = { type: GET_REVISIONS_SUCCESS, payload }
    const resultState = revisionsReducer(initState, action)
    const expectedState = {
      loading: false,
      error: false,
      total,
      data: {
        [`${payload.offset}-${payload.limit}`]: payload.data,
      },
    }
    expect(expectedState).toEqual(resultState)
  })
})
