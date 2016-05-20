import React, { Component } from 'react';
import Mood from './portfolio/mood'
import Puppyrace from './portfolio/puppyrace'
import Sohoduck from './portfolio/sohoduck'
import Sprinkle from './portfolio/sprinkle'

class Portfolio extends Component {
  render(){
    return (
      <div>
        <div id="fullpage">
          <Sohoduck />

          <Sprinkle />

          <Mood />

          <Puppyrace />
        </div>
      </div>
    )
  }
}

export default Portfolio;
