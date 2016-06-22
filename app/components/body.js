import React, { Component } from 'react';
import { Link } from 'react-router';
import Topic from './body/topic'
import Company from './body/company'
import Profile from './body/profile'
import Engineer from './body/engineer'
import Carousel from './body/carousel'

class Body extends Component {
  render(){
    return (
      <div id="body">

        {/* profile */}
        <Profile />

        <br/>
        <br/>

        {/* body topics */}
        <Topic />

        <div className="ui horizontal divider">Quick Glance</div>

        {/* carousel */}
        <Carousel />

        {/* Software Engineer */}
        <Engineer />

        <div className="ui horizontal divider">Worked with</div>
        {/* passed experiences */}
        <Company />

      </div>
    )
  }
}

export default Body;
