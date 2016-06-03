import React, { Component } from 'react';

export default class Allthingsfrenchie extends Component {
  render(){
    return (
      <div id="sprinkle" className="section">

        <div className="ui horizontal divider">allthingsfrenchie</div>
        <h4 className="ui header">
          <p id="portfolioheader">Allthingsfrenchie is an e-commerce fashion boutique inspired by our French Bulldogs & their Friends. We offers one stop shop for all your animal inspired oufits, bags and accessories.</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logosize" src="images/icons/google.gif" alt="googleanalytics"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <img id="logosize" src="images/icons/squarespace.png" alt="css3"/>
        </div>

        <div className="ui divider"></div>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/allthingsfrenchie/allthingsfrenchie.png" alt="allthingsfrenchie" data-title="allthingsfrenchie" data-content="Frenche Bulldog inspired e-commerce boutique"/>
        </div>

        <div className="ui divider"></div>

        <h4 className="ui center aligned icon header">
          <a href="http://www.allthingsfrenchie.com" target="_blank">
            <div className="ui animated fade button" tabindex="0">
              <div className="visible content"> Visit the website</div>
              <div className="hidden content">
              Warp 10...Engage!!
              </div>
            </div>
          </a>
        </h4>

      </div>
    )
  }
}
