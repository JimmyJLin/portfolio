import React, { Component } from 'react';

class Sohoduck extends Component {
  render(){
    return (
      <div id="sohoduck" className="section active">

        <div className="ui tiny images">
          <img id="logo" src="images/icons/reactnative.png" alt="react native"/>
          <img id="logo" src="images/icons/webpack.png" alt="react native"/>
          <img id="logo" src="images/icons/firebase.png" alt="react native"/>
        </div>

        {/*<div className="ui big image">
          <img src="images/portfolio/sohoduck/SoHoDuck.jpg" alt="SoHo duck" />
        </div>*/}

      </div>
    )
  }
}

export default Sohoduck;
