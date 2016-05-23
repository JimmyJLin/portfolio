import React, { Component } from 'react';

export default class Topic extends Component {
  render(){
    return(
      <div>
        {/* modals */}

        {/* world modal*/}
        <div className="ui modal world">
          <i className="close icon"></i>
          <div className="header">
            World Traveler
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/topics/visited.png" alt="visited countries"/>
            </div>
            <div className="description">
              <div className="ui header"> Countries visited </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* foodie modal*/}
        <div className="ui modal foodie">
          <i className="close icon"></i>
          <div className="header">
            Foodie
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/topics/visited.png" alt="visited countries"/>
            </div>
            <div className="description">
              <div className="ui header"> Live Life & Eat </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* warrior modal*/}
        <div className="ui modal warrior">
          <i className="close icon"></i>
          <div className="header">
            Warrior
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/topics/6comm.png" alt="6 Comm"/>
            </div>
            <div className="description">
              <div className="ui header"> United States Marine Corps </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* entrepreneur modal*/}
        <div className="ui modal entrepreneur">
          <i className="close icon"></i>
          <div className="header">
            Entrepreneur
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/topics/allthingsfrenchielogo.png" alt="visited countries"/>
            </div>
            <div className="description">
              <div className="ui header"> Allthingsfrenchie </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* consultant modal*/}
        <div className="ui modal consultant">
          <i className="close icon"></i>
          <div className="header">
            Consultant
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/topics/visited.png" alt="visited countries"/>
            </div>
            <div className="description">
              <div className="ui header"> Business & Social Media Consultant </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* body header */}
        <div className="ui five column stackable fluid grid">
          <div className="row">

            {/* world traveler */}
            <div className="column">
                <div id="world" className="ui small circular fade reveal image">
                  <img src="/images/body/topics/world_traveler.png" alt="world traveler" className="visible content"/>
                  <img src="/images/body/topics/world2.jpg" alt="world" className="hidden"/>
                </div>
            </div>

            {/* foodie */}
            <div className="column">
              <div id="foodie" className="ui small fade reveal image">
                <img src="/images/body/topics/foodie.png" alt="foodie" className="visible content"/>
                <img src="/images/body/topics/grilledcheese.jpg" alt="grilled cheese" className="hidden"/>
              </div>
            </div>

            {/* warrior */}
            <div className="column">
              <div id="warrior" className="ui small fade reveal image">
                <img src="/images/body/topics/warrior.png" alt="warrior" className="visible content"/>
                <img src="/images/body/topics/usmc.jpg" alt="usmc" className="hidden"/>
              </div>
            </div>

            {/* entrepreneur */}
            <div className="column">
              <div id="entrepreneur" className="ui small fade reveal image">
                <img src="/images/body/topics/entrepreneur.png" alt="entrepreneur" className="visible content"/>
                <img src="/images/body/topics/allthingsfrenchielogo.png" alt="allthingsfrenchie" className="hidden"/>
              </div>
            </div>

            {/* consultant */}
            <div className="column">
              <div id="consultant" className="ui small fade reveal image">
                <img src="/images/body/topics/consultant.png" alt="consultant" className="visible content"/>
                <img src="/images/body/topics/consulting.jpg" alt="consulting" className="hidden"/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }

}
