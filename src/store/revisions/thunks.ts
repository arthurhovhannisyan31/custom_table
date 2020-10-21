// helpers
import { getRevisions, setRevisions } from '_/store/revisions/actions'
import { AppDispatch } from '_/store/store'
import { fetchTestData } from '_/store/revisions/queries'

export const getRevisionsThunk = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(getRevisions())
    const data = await fetchTestData()
    setTimeout(() => {
      dispatch(setRevisions(data))
    }, 1000)
  }
}

export const test = () => {}
