import * as types from '../types/index';
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-react-router';

function fetchNews(state = {
  isLoading: false,
  data: [],
  error: false
}, action = null) {
  switch (action.type) {
    case types.FETCH_NEWS:
      return Object.assign({}, state, {isLoading: false, data: action.data, error: true})
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  news: fetchNews
})

export default rootReducer;
