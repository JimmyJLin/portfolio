import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render(){
    return (
      <div>
        <div id="header" className="ui top fixed main three item menu">

          <div className="ui text container">
            <Link to="/" className="item"><i className="icon home"></i>Home</Link>
            <Link to="/portfolio" className="item"><i className="icon block layout"></i>Portfolio</Link>
            <Link to="/photography" className="item"><i className="icon camera retro"></i>Photography</Link>

          </div>

        </div>

      </div>
    )
  }
}

export default Header;
