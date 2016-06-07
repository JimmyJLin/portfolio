import axios from 'axios';
import * as types from '../types/index'
import { pushState } from 'redux-react-router'

// export function fetchUsNews() {
//   const ROOT_RUL = 'http://api.nytimes.com/svc/topstories/v1'
//   const API_KEY = '?api-key=656fc19a0114f7cbc07fa612f2bbe510:12:61578174'
//
//   axios.get(`${ROOT_RUL}/national.json${API_KEY}`)
//     .then(function(response){
//       return {
//         type: FETCH_NEWS,
//         payload: response
//       };
//     })
//     .catch(function(response){
//     })
//
//
// }


export function fetchUsNews() {
  const ROOT_RUL = 'http://api.nytimes.com/svc/topstories/v1'
  const API_KEY = '?api-key=656fc19a0114f7cbc07fa612f2bbe510:12:61578174'
  return function(dispatch) {
    dispatch(requestData());
    return axios({
      url: `${ROOT_RUL}/national.json${API_KEY}`,
      timeout: 2000,
      method: 'get',
      responseType: 'json'
    })
      .then(function(response){
        dispatch(receiveData(response.data));
      })
      .catch(function(response){
        dispatch(receiveError(response.data));
        dispatch(pushState(null, '/error'));
      })
  }

}
