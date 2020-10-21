// helpers
import {
  GET_REVISIONS_REQUEST,
  GET_REVISIONS_ERROR,
  GET_REVISIONS_SUCCESS,
} from '_/store/revisions/constants'
import { IRevision, IAction } from '_/store/revisions/types'

interface IInitState {
  loading: false
  error: any
  data: Record<string, IRevision[]>
}

const initState: IInitState = {
  loading: false,
  error: false,
  data: {},
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
        loading: payload,
      }
    case GET_REVISIONS_SUCCESS:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default revisionsReducer
