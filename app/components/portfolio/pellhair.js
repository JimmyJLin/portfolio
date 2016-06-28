import React, { Component } from 'react';

export default class Pellhair extends Component {
  render(){
    return (
      <div id="pellhair" className="section active">

        <div className="ui horizontal divider">22 Pell Hair Salon</div>
        <h4 className="ui header">
          <p id="portfolioheader">22 Pell Hair salon the located in the heart of Chinatown, NYC is the gold standard in Cut, Color and Thermal Reconditioning.</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logosize" src="images/icons/javascript5.png" alt="javaScript"/>
          <img id="logosize" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logosize" src="images/icons/nodeexpress.png" alt="express"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <img id="logosize" src="images/icons/heroku.png" alt="heroku"/>
        </div>

        <div className="ui divider"></div>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/pellhair/desktop.png" alt="22 Pell Hair" data-title="Liweibeauty" data-content="22 Pell Hair is the gold standard in Salon."/>
        </div>

        <div className="ui divider"></div>

        <h4 className="ui center aligned icon header">
          <a id="displayinline" href="https://pellhair.herokuapp.com/" target="_blank">
            <i className="ui icon large world black"></i>
          </a>
          <a id="displayinline" href="https://github.com/JimmyJLin/pellhair" target="_blank">
            <i className="ui icon large github black"></i>
          </a>
        </h4>

      </div>
    )
  }
}
