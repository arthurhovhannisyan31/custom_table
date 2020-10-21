// deps
import { combineReducers } from 'redux'
// helpers
import {
  moduleName as revisionsModule,
  revisionsReducer,
} from '_/store/revisions'

const rootReducer = combineReducers({
  [revisionsModule]: revisionsReducer,
})

export default rootReducer
