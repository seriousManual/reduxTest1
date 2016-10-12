import {combineReducers} from 'redux'

import paging from './pagingReducer'
import list from './listReducer'

export default combineReducers({paging, list})