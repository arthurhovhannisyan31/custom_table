// helpers
import { getRevisions, setRevisions } from '_/store/revisions/actions'
import { AppDispatch } from '_/store/store'
import { fetchTestData } from '_/store/revisions/queries'
import { IRevisionsFilterProps } from '_/store/revisions/types'

// eslint-disable-next-line
export const getRevisionsThunk = (props: IRevisionsFilterProps) => {
  const { limit, offset } = props
  return async (dispatch: AppDispatch) => {
    dispatch(getRevisions())
    const { data, total } = await fetchTestData(props)
    setTimeout(() => {
      dispatch(setRevisions({ data, total, limit, offset }))
    }, 2000 * Math.random())
  }
}
