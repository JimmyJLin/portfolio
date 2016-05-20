import React, { Component } from 'react';

class Puppyrace extends Component {
  render(){
    return (
      <div id="puppyrace" className="section">

        <div className="ui horizontal divider">Puppy Race</div>
        <h4 className="ui header">
          <p id="portfolioheader">Monopoly inspired turn based board game for all ages</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logosize" src="images/icons/javascript5.png" alt="javaScript"/>
          <img id="logosize" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <a href="http://jimmyjlin.github.io/Puppy-Race/">
            <img id="logosize" src="images/icons/Github.png" alt="github"/>
          </a>
        </div>

        <div className="ui divider"></div>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/puppyrace/puppy_race.png" alt="puppy race" data-title="Puppy Race" data-content="inspired by my two french bulldogs Lord Vader & Sir Clementtine"/>
        </div>

        <div className="ui divider"></div>

      </div>
    )
  }
}

export default Puppyrace;
