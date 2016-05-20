import React, { Component } from 'react';

class Mood extends Component {
  render(){
    return (
      <div id="mood" className="section">

        <div className="ui horizontal divider">Moo-D</div>
        <h4 className="ui header">
          <p id="portfolioheader">Mood sharing app where each user can create and share their current activity and emotional states with the world</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logo" src="images/icons/javascript.png" alt="javaScript"/>
          <img id="logo" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logo" src="images/icons/nodeexpress.jpg" alt="express"/>
          <img id="logo" src="images/icons/postgresql.png" alt="postgresql"/>
          <img id="logo" src="images/icons/html.png" alt="html"/>
          <img id="logo" src="images/icons/css3.png" alt="css3"/>

        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/mood/moo-d.jpg" alt="puppy race" data-title="moo-d" data-content="able to sent and receive encouraging message from friends"/>
        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

      </div>
    )
  }
}

export default Mood;
