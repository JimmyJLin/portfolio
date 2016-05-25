import React, { Component } from 'react';

export default class Company extends Component {
  render(){
    return(
      <div>

        {/* NYSE modal */}
        <div className="ui modal ga">
          <i className="close icon"></i>
          <div className="header">
            General Assembly
          </div>
          <div className="ui middle center aligned content">
            <div className="ui large image">
              <img src="/images/body/companies/ga/ga.png" alt="ga"/>
            </div>
          </div>
        </div>

        {/* sade wellness modal */}
        <div className="ui modal sade">
          <i className="close icon"></i>
          <div className="header">
            Sade Wellness
          </div>
          <div className="ui middle center aligned content">
            <div className="ui large image">
              <img src="/images/body/companies/sade/sadewellness.jpg" alt="sade"/>
            </div>
          </div>
        </div>

        {/* NYSE modal */}
        <div className="ui modal nyse">
          <i className="close icon"></i>
          <div className="header">
            NYSE Euronext
          </div>
          <div className="ui middle center aligned content">
            <img src="/images/body/companies/nyse/nyse.jpg" alt="nyse"/>
          </div>
        </div>

        {/* allthingsfrenchie modal */}
        <div className="ui modal allthingsfrenchie">
          <i className="close icon"></i>
          <div className="header">
            allthingsfrenchie
          </div>
          <div className="ui middle center aligned content">
            <div className="ui large image">
              <img src="/images/body/companies/allthingsfrenchie/allthingsfrenchiesite.jpg" alt="nyse"/>
            </div>
          </div>
        </div>

        {/* tabs */}
        <div className="ui middle center aligned piled segment red">

          <div className="ui top attached stackable tabular menu">
            <a className="item active" data-tab="first">
              <img className="companytablogo" src="images/body/companies/ga/ga.png" alt="ga"/>
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
              <img className="companytablogo" src="images/body/companies/nyse.png" alt="nyse"/>
            </a>
            <a className="item" data-tab="sixth">
              <img className="companytablogo" src="images/body/companies/milbon.png" alt="milbon"/>
            </a>
            <a className="item" data-tab="seventh">
              <img className="companytablogo" src="images/body/topics/allthingsfrenchielogo.png" alt="allthingsfrenchielogo"/>
            </a>
          </div>

          <div className="ui bottom attached tab segment active" data-tab="first">
            <h3 id="tabheader">General Assembly</h3>
            <h4 id="tabheader">Immersive</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>12 week immersive program which teaches passionate, entrepreneurial individuals the skills and knowledge needed for a junior web developer position.</p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img id="ga" className="ui left floated small rounded image" src="images/body/companies/ga/ga.png" alt="ga"/>
                  <p>Built Responsive full stack CRUD web applications</p>
                  <p>Designed and implemented wireframs, relationship diagrams and built RESTful APIs</p>
                  <p>Experienced with both server side and client side rendering</p>
                  <p>Web & Mobile iOS Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="second">
            <h3 id="tabheader">Sade Wellness</h3>
            <h4 id="tabheader">Consultant</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>Sade Wellness provide comprehensive wellness programs to companies of 200 or more employees, focusing on wellness of employees as well as the organization's culture.</p>
                  <p>As a small start-up Sade Wellness is faced with scalibility in terms of Human Resources, especially in the area of talent attraction, retention and development </p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img id="sade" className="ui left floated small rounded image" src="images/body/companies/sade/sadewellness.jpg" alt="sade"/>
                  <p>Implementation of EVP (Employee Value Proposition)</p>
                  <p>Re-organize Sade into a flatten organization to reduce top down communication, promote high-involvement management rather than micromanaging and retain the entrepreneurial innovation of a small start-up</p>
                  <p>Utilize 9 Box Talent Assessment to identify the high potential and high performance employee, and built a critical mass of future leaders</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="third">
            <h3 id="tabheader">Microsoft</h3>
            <h4 id="tabheader">Consultant</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>With overall industry in decline and hightly competitive environment, how Event Marketing Department can improve the strategic values and competitiveness of the NYSE Euronext</p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img className="ui left floated small rounded image" src="images/body/companies/nyse/nyse.jpg" alt="nyse"/>
                  <p>As one of the integral part of the NYSE Euronext.  Event Marketing needs to transition from an execution only department to the one that has a more collaborative focus, with the end results of brining value and add a differentiation factor to the NYSE in it's highly competitive environment.</p>
                  <p>Event Marketing Department needs to find efficiencies through adoptation of new technologies that will enable collaboration and reduce repetitive tasks.</p>
                  <p>Establishing and implementing metrics to help gauge success at each step will guide the Event Marketing toward the path of improve strategic values and improve competitiveness for the NYSE Euronext</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="fourth">
            <h3 id="tabheader">Pepsico</h3>
            <h4 id="tabheader">Consultant</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>With overall industry in decline and hightly competitive environment, how Event Marketing Department can improve the strategic values and competitiveness of the NYSE Euronext</p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img className="ui left floated small rounded image" src="images/body/companies/nyse/nyse.jpg" alt="nyse"/>
                  <p>As one of the integral part of the NYSE Euronext.  Event Marketing needs to transition from an execution only department to the one that has a more collaborative focus, with the end results of brining value and add a differentiation factor to the NYSE in it's highly competitive environment.</p>
                  <p>Event Marketing Department needs to find efficiencies through adoptation of new technologies that will enable collaboration and reduce repetitive tasks.</p>
                  <p>Establishing and implementing metrics to help gauge success at each step will guide the Event Marketing toward the path of improve strategic values and improve competitiveness for the NYSE Euronext</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="fifth">
            <h3 id="tabheader">NYSE</h3>
            <h4 id="tabheader">Consultant</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>With overall industry in decline and hightly competitive environment, how Event Marketing Department can improve the strategic values and competitiveness of the NYSE Euronext</p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img id="nyse" className="ui left floated small rounded image" src="images/body/companies/nyse/nyse.jpg" alt="nyse"/>
                  <p>As one of the integral part of the NYSE Euronext.  Event Marketing needs to transition from an execution only department to the one that has a more collaborative focus, with the end results of brining value and add a differentiation factor to the NYSE in it's highly competitive environment.</p>
                  <p>Event Marketing Department needs to find efficiencies through adoptation of new technologies that will enable collaboration and reduce repetitive tasks.</p>
                  <p>Establishing and implementing metrics to help gauge success at each step will guide the Event Marketing toward the path of improve strategic values and improve competitiveness for the NYSE Euronext</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="sixth">
            <h3 id="tabheader">Milbon USA</h3>
            <h4 id="tabheader">National Sales Manager</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="ui item paddingtop10">
                  <p>Milbon Group is Japan's #1 professional haircare brand product company with groundbreaking treatments, haircare products for professionals and consumers.</p>
                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="ui item paddingtop10">
                  <img className="ui left floated tiny rounded image" src="images/body/companies/milbon/product.png" alt="product"/>
                  <p>As the National Sales Manager for Milbon USA (subsidiary), I personally oversee the entire North American sales and customer service departments, created business development strategies and saelss processes.</p>
                  <p>During my time at Milbon, I established processes and technological initiatives to improve sales and account management effiicency and lowered costs.</p>
                  <p>Developed sales strategy and collaborated with global sales management team for long-term strategic planning, information sharing and development of best practices.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ui bottom attached tab segment" data-tab="seventh">
            <h3 id="tabheader">allthingsfrenchie</h3>
            <h4 id="tabheader">Founder</h4>
            <div className="column">
              <div className="ui raised segment">
                <a className="ui red left ribbon label">Overview</a>
                <div className="paddingtop10">
                  <p>Allthingsfrenchie is an e-commerce fashion boutique inspired by our French Bulldogs & their Friends.  We offers one stop shop for all your animal inspired oufits, bags and accessories.</p>

                  {/* allthingsfrenchie social media links */}
                  <div className="ui center aligned column stackable fluid grid">
                    <div className="column">
                      <a href="http://www.allthingsfrenchie.com"><i className="icon world big blue"></i></a>
                      <a href="http://www.facebook.com/allthingsfrenchie.shop"><i className="icon facebook square big blue"></i></a>
                      <a href="http://instagram.com/allthingsfrenchie_shop"><i className="icon instagram big orange"></i></a>
                      <a href="https://www.pinterest.com/jimmy3633/"><i className="icon pinterest square big red"></i></a>
                    </div>
                  </div>

                </div>
                <a className="ui blue left ribbon label">Summary</a>
                <div className="paddingtop10">
                  <img id="allthingsfrenchie" className="ui left floated small rounded image" src="images/body/companies/allthingsfrenchie/allthingsfrenchiesite.jpg" alt="nyse"/>
                  <p> talk about the design / development process for allthingsfrenchie</p>
                  <p>Social Media and Business consultant for small business</p>
                  <p>Establishing and implementing metrics to help gauge success at each step will guide the Event Marketing toward the path of improve strategic values and improve competitiveness for the NYSE Euronext</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }

}
