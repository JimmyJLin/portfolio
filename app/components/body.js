import React, { Component } from 'react';
import { Link } from 'react-router';

class Body extends Component {
  render(){
    return (
      <div id="body">

        {/* header */}
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Jimmy J. Lin
        </h2>

        <div className="ui divider"></div>

        {/* modals */}
        <div className="ui modal world">
          <i className="close icon"></i>
          <div className="header">
            World Traveler
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/visited.png" alt="visited countries"/>
            </div>
            <div className="description">
              <div className="ui header"> Countries visited </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* text/image reveal */}
        <div id="world" className="ui small circular fade reveal image">
          <img src="/images/body/world_traveler.png" alt="chris" className="visible content"/>
          <img src="/images/body/world2.jpg" alt="ade" className="hidden"/>
        </div>



      </div>
    )
  }
}

export default Body;
