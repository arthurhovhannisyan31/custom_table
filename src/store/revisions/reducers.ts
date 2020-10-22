// helpers
import {
  GET_REVISIONS_REQUEST,
  GET_REVISIONS_ERROR,
  GET_REVISIONS_SUCCESS,
} from '_/store/revisions/constants'
import { IRevision, IAction } from '_/store/revisions/types'

interface IInitState {
  loading: false
  error: boolean | Record<string, Record<string, string>>
  data: Record<string, IRevision[]>
  total: number
}

const initState: IInitState = {
  loading: false,
  error: false,
  data: {},
  total: 0,
}

const revisionsReducer = (state: IInitState = initState, action: IAction) => {
  const { type, payload } = action
  switch (type) {
    case GET_REVISIONS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case GET_REVISIONS_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      }
    case GET_REVISIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: {
          ...state.data,
          [`${payload.offset}-${payload.limit}`]: payload.data,
        },
        total: payload.total,
      }
    default:
      return state
  }
}

export default revisionsReducer
