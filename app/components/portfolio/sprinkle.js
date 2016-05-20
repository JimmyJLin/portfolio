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
          <img id="logo" src="images/icons/react.png" alt="react native"/>
          <img id="logo" src="images/icons/javascript.png" alt="javaScript"/>
          <img id="logo" src="images/icons/jquery.png" alt="jquery"/>
          <img id="logo" src="images/icons/nodeexpress.jpg" alt="express"/>
          <img id="logo" src="images/icons/ajax.png" alt="ajax"/>
          <img id="logo" src="images/icons/postgresql.png" alt="postgresql"/>
          <img id="logo" src="images/icons/html.png" alt="html"/>
          <img id="logo" src="images/icons/css3.png" alt="css3"/>
        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

        <div className="ui large images">
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sprinkle/sprinkle.png" alt="Sprinkle" data-title="Sprinkle" data-content="able to search and return results from Careerbuilder.com & Indded.com"/>
        </div>

        <br/>
        <div className="ui divider"></div>
        <br/>

      </div>
    )
  }
}

export default Sprinkle;
