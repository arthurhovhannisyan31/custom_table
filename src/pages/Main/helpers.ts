// deps
import { RootState } from '_/store/store'
import { moduleName } from '_/store/revisions/constants'

export const revisionsSelector = (state: RootState) => state[moduleName]

export const test = () => {}
