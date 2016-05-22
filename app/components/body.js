import React, { Component } from 'react';
import { Link } from 'react-router';
import Topic from './body/topic'
import Company from './body/company'

class Body extends Component {
  render(){
    return (
      <div id="body">

        {/* header */}
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Jimmy J. Lin
        </h2>

        <Topic />

        <div className="ui horizontal divider">Worked with</div>

        <Company />

        {/* */}

      </div>
    )
  }
}

export default Body;
