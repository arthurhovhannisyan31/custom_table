// deps
import { RootState } from '_/store/store'
import { moduleName } from '_/store/revisions/constants'

// eslint-disable-next-line
export const revisionsSelector = (state: RootState) => state[moduleName]
