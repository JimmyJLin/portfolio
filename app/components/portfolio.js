import React, { Component } from 'react';
import Mood from './portfolio/mood'
import Puppyrace from './portfolio/puppyrace'
import Sohoduck from './portfolio/sohoduck'
import Sprinkle from './portfolio/sprinkle'

class Portfolio extends Component {
  render(){
    return (
      <div id="fullpage">
        <Sohoduck />

        <Sprinkle />

        <Mood />

        <Puppyrace />
      </div>
    )
  }
}

export default Portfolio;
