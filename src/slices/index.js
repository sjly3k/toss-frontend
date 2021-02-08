import { combineReducers } from 'redux'
import accountsReducer from './account'

const rootReducer = combineReducers({
	accounts: accountsReducer,
})

export default rootReducer;