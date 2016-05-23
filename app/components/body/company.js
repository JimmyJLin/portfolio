import React, { Component } from 'react';

export default class Company extends Component {
  render(){
    return(
      <div>

        {/* tabs */}
        <div className="ui middle center aligned piled segment red">

          <div className="ui top attached stackable tabular menu">
            <a className="item active" data-tab="first">
              <img className="companytablogo" src="images/body/companies/nyse.png" alt="nyse"/>
            </a>
            <a className="item" data-tab="second">
              <img className="companytablogo" src="images/body/companies/sade.jpg" alt="sade wellness"/>
            </a>
            <a className="item" data-tab="third">
              <img className="companytablogo" src="images/body/companies/microsoft.jpg" alt="microsoft"/>
            </a>
            <a className="item" data-tab="fourth">
              <img className="companytablogo" src="images/body/companies/pepsico.jpg" alt="pepsico"/>
            </a>
            <a className="item" data-tab="fifth">
              <img className="companytablogo" src="images/body/companies/brooklyn.png" alt="brooklyn"/>
            </a>
            <a className="item" data-tab="sixth">
              <img className="companytablogo" src="images/body/companies/milbon.png" alt="milbon"/>
            </a>
            <a className="item" data-tab="seventh">
              <img className="companytablogo" src="images/body/topics/allthingsfrenchielogo.png" alt="allthingsfrenchielogo"/>
            </a>
          </div>

          <div className="ui bottom attached tab segment active" data-tab="first">
            NYSE
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="second">
            Sade Wellness
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="third">
            Microsoft
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="fourth">
            Pepsico
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="fifth">
            Brooklyn Brewery
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="sixth">
            Milbon USA
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="seventh">
            Allthingsfrenchie
            <div className="column">
              <div className="ui raised segment">
              <a className="ui red left ribbon label">Overview</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              <a className="ui blue left ribbon label">Summary</a>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}
