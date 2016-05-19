import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render(){
    return (
      <div>
        <div id="footer" className="ui four item bottom fixed menu">
          <a href="https://github.com/JimmyJLin" className="item" target="_blank"><i className="icon github square large black"></i>Github</a>
          <a href="https://www.linkedin.com/in/jimmyjlin" className="item" target="_blank"><i className="icon linkedin square large blue"></i>LinkedIn</a>
          <a href="images/jimmy_lin_resume.pdf" className="item" target="_blank"><i className="icon dropbox large blue" target="_blank"></i>Resume</a>
          <a href="https://www.jimmyjlin.com" className="item" target="_blank"><i className="icon rebel large red"></i>Rebel</a>
        </div>
      </div>
    )
  }
}

export default Footer;
