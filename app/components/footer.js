import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render(){
    return (
      <div>
        <div className="ui four item bottom fixed menu">
          <a href="https://github.com/JimmyJLin" className="item" target="_blank"><i className="icon github square large"></i>Github</a>
          <a href="https://www.linkedin.com/in/jimmyjlin" className="item" target="_blank"><i className="icon linkedin square large"></i>LinkedIn</a>
          <a href="/images/jimmy_lin_resume.pdf" className="item" target="_blank"><i className="icon file pdf outline large" target="_blank"></i>Resume</a>
          <a href="https://www.jimmyjlin.com" className="item" target="_blank"><i className="icon rebel large"></i>Rebel</a>
        </div>
      </div>
    )
  }
}

export default Footer;
