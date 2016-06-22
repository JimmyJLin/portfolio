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
          <img id="logosize" src="images/icons/javascript5.png" alt="javaScript"/>
          <img id="logosize" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logosize" src="images/icons/nodeexpress.png" alt="express"/>
          <img id="logosize" src="images/icons/postgresql.png" alt="postgresql"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <a href="https://moo-d.herokuapp.com" target="_blank">
            <img id="logosize" src="images/icons/heroku.png" alt="heroku"/>
          </a>
        </div>

        <div className="ui divider"></div>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/mood/moo-d.jpg" alt="puppy race" data-title="moo-d" data-content="able to sent and receive encouraging message from friends"/>
        </div>

        <div className="ui divider"></div>

        <h4 className="ui center aligned icon header">
          <a id="displayinline" href="https://moo-d.herokuapp.com" target="_blank">
            <i className="ui icon large world black"></i>
          </a>
          <a id="displayinline" href="https://github.com/JimmyJLin/liwei_beauty" target="_blank">
            <i className="ui icon large github black"></i>
          </a>
        </h4>


      </div>
    )
  }
}

export default Mood;
