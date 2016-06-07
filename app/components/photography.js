import React, { Component } from 'react';
import axios from 'axios'
import { fetchNews } from '../actions/index';

class Photography extends Component {

  constructor(props){
    super(props);
  }


  componentWillMount() {
    const ROOT_URL = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&'
    const API_KEY = '7d09cc024d8da1bdd970c79ba7291eca'
    const USER_ID = '99263061@N07'

    axios.get(`${ROOT_URL}&format=json&api_key=${API_KEY}&user_id=${USER_ID}`)
      .then(function(response){
        console.log(response.data)
      })
      .catch(function(response){
        console.log('.catch')
      })

  }

  render(){
    return (
      <div id="photography">
        <img src="images/underconstruction.svg" alt="underconstruction"/>
      </div>
    )
  }
}

export default Photography;
