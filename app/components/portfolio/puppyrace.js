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
          <img id="logo" src="images/icons/javascript.png" alt="javaScript"/>
          <img id="logo" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logo" src="images/icons/html.png" alt="html"/>
          <img id="logo" src="images/icons/css3.png" alt="css3"/>
        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/puppyrace/puppy_race.png" alt="puppy race" data-title="Puppy Race" data-content="inspired by my two french bulldogs Lord Vader & Sir Clementtine"/>
        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

      </div>
    )
  }
}

export default Puppyrace;
