import React, { Component } from 'react';
import Mood from './portfolio/mood'
import Puppyrace from './portfolio/puppyrace'
import Sohoduck from './portfolio/sohoduck'
import Sprinkle from './portfolio/sprinkle'
import Allthingsfrenchie from './portfolio/allthingsfrenchie'
import Liweibeauty from './portfolio/liweibeauty'

class Portfolio extends Component {
  render(){
    return (
      <div>
        <div id="fullpage">
          <Liweibeauty />

          <Sohoduck />

          <Sprinkle />

          <Mood />

          <Puppyrace />

          <Allthingsfrenchie />
          
        </div>
      </div>
    )
  }
}

export default Portfolio;
