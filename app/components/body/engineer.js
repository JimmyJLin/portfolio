import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Topic extends Component {
  render(){
    return(
      <div id="developer">
        <br/>
        <br/>
        <div className="ui middle center aligned piled segment teal">
          <h3 id="tabheader">Software Engineer | Web Developer</h3>
          <br/>

          {/* Front End Frameworks */}
          <div className="ui raised segment">
            <div className="ui horizontal divider">Front End Frameworks</div>
            <div className="ui tiny images">
              <img id="logosize" className="ui image pop visible" data-title="React" src="images/icons/react.png" alt="react native"/>
              <img id="logosize" className="ui image pop visible" data-title="React Native" src="images/icons/reactnative.png" alt="react native"/>
              <img id="logosize" className="ui image pop visible" data-title="Redux" src="images/icons/redux.png" alt="redux"/>
              <img id="logosize" className="ui image pop visible" data-title="Webpack" src="images/icons/webpack.png" alt="webpack"/>
              <img id="logosize" className="ui image pop visible" data-title="jQuery" src="images/icons/jquery.png" alt="jquery"/>
              <img id="logosize" className="ui image pop visible" data-title="HTML5" src="images/icons/html.png" alt="html"/>
              <img id="logosize" className="ui image pop visible" data-title="CSS3" src="images/icons/css3.png" alt="css3"/>
            </div>
          </div>


          {/* Back End Frameworks */}
          <div className="ui raised segment">
            <div className="ui horizontal divider">Back End Frameworks</div>
            <div className="ui tiny images">
              <img id="logosize" className="ui image pop visible" data-title="ES5" src="images/icons/javascript5.png" alt="javaScript"/>
              <img id="logosize" className="ui image pop visible" data-title="ES6" src="images/icons/javascript.png" alt="javaScript"/>
              <img id="logosize" className="ui image pop visible" data-title="Ruby" src="images/icons/ruby.png" alt="ruby"/>
              <img id="logosize" className="ui image pop visible" data-title="Rails" src="images/icons/rails.png" alt="rail"/>
              <img id="logosize" className="ui image pop visible" data-title="Node Express" src="images/icons/nodeexpress.png" alt="express"/>
              <img id="logosize" className="ui image pop visible" data-title="PostgreSQL" src="images/icons/postgresql.png" alt="postgresql"/>
              <img id="logosize" className="ui image pop visible" data-title="Firebase" src="images/icons/firebase.png" alt="firebase"/>
              <img id="logosize" className="ui image pop visible" data-title="Mocha" src="images/icons/mocha.png" alt="mocha"/>
              <img id="logosize" className="ui image pop visible" data-title="Chai" src="images/icons/chai.png" alt="chai"/>
            </div>
          </div>

          {/* Other Frameworks */}
          <div className="ui raised segment">
            <div className="ui horizontal divider">Others</div>
            <div className="ui tiny images">
              <img id="logosize" className="ui image pop visible" data-title="Github" src="images/icons/Github.png" alt="github"/>
              <img id="logosize" className="ui image pop visible" data-title="Heroku" src="images/icons/heroku.png" alt="heroku"/>
              <img id="logosize" className="ui image pop visible" data-title="Testfairy" src="images/icons/testfairy.png" alt="test fairy"/>
              <img id="logosize" className="ui image pop visible" data-title="Squarespace" src="images/icons/squarespace.png" alt="squarespace"/>
              <img id="logosize" className="ui image pop visible" data-title="Wordpress" src="images/icons/wordpress.png" alt="wordpress"/>
            </div>
          </div>

          {/*<div className="ui raised segment">
            <div className="ui horizontal divider">Portfolio</div>
            <Link to="/portfolio" className="item"><i className="icon block layout"></i>Portfolio</Link>
          </div>*/}

        </div>

      </div>
    )
  }
}
