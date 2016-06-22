import React, { Component } from 'react';

class Sprinkle extends Component {
  render(){
    return (
      <div id="sprinkle" className="section">

        <div className="ui horizontal divider">Sprinkle</div>
        <h4 className="ui header">
          <p id="portfolioheader">Kayak of Job Search.  Sprinkle makes job searching a little more enjoyable by combining multiple job search sites into one</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logosize" src="images/icons/react.png" alt="react native"/>
          <img id="logosize" src="images/icons/javascript5.png" alt="javaScript"/>
          <img id="logosize" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logosize" src="images/icons/nodeexpress.png" alt="express"/>
          <img id="logosize" src="images/icons/postgresql.png" alt="postgresql"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <a href="https://sprinkle-jobs.herokuapp.com" target="_blank">
            <img id="logosize" src="images/icons/heroku.png" alt="heroku"/>
          </a>
        </div>

        <div className="ui divider"></div>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sprinkle/sprinkle.png" alt="Sprinkle" data-title="Sprinkle" data-content="able to search and return results from Careerbuilder.com & Indded.com"/>
        </div>

        <div className="ui divider"></div>

        <h4 className="ui center aligned icon header">
          <a id="displayinline" href="https://sprinkle-jobs.herokuapp.com" target="_blank">
            <i className="ui icon large world black"></i>
          </a>
          <a id="displayinline" href="https://github.com/WDI-Project-Sprinkle/Sprinkle" target="_blank">
            <i className="ui icon large github black"></i>
          </a>
        </h4>

      </div>
    )
  }
}

export default Sprinkle;
