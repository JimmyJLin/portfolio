import React, { Component } from 'react';

export default class Liweibeauty extends Component {
  render(){
    return (
      <div id="sprinkle" className="section active">

        <div className="ui horizontal divider">Liwei Beauty International</div>
        <h4 className="ui header">
          <p id="portfolioheader">Liwei Beauty is full service salon/spa offering varieties of facials, skincare and permenant eyebrow tattoos.</p>
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
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/liweibeauty/liweibeauty.png" alt="Liwei Beauty" data-title="Liweibeauty" data-content="Liwei Beauty is full service salon/spa."/>
        </div>

        <div className="ui divider"></div>

        <h4 className="ui center aligned icon header">
          <a href="http://www.liweibeauty.com" target="_blank">
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
