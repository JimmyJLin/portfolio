import React, { Component } from 'react';
import { Link } from 'react-router';

class Body extends Component {
  render(){
    return (
      <div id="body">

        {/* header */}
        <h2 className="ui center aligned icon header">
          <i className="circular users icon"></i>
          Jimmy J. Lin
        </h2>

        {/* modals */}

        {/* world modal*/}
        <div className="ui modal world">
          <i className="close icon"></i>
          <div className="header">
            World Traveler
          </div>
          <div className="image content">
            <div className="ui massive image">
              <img src="/images/body/visited.png" alt="visited countries"/>
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
              <img src="/images/body/visited.png" alt="visited countries"/>
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
              <img src="/images/body/visited.png" alt="visited countries"/>
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
              <img src="/images/body/visited.png" alt="visited countries"/>
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
              <img src="/images/body/visited.png" alt="visited countries"/>
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
                  <img src="/images/body/world_traveler.png" alt="world traveler" className="visible content"/>
                  <img src="/images/body/world2.jpg" alt="world" className="hidden"/>
                </div>
            </div>

            {/* foodie */}
            <div className="column">
              <div id="foodie" className="ui small fade reveal image">
                <img src="/images/body/foodie.png" alt="foodie" className="visible content"/>
                <img src="/images/body/grilledcheese.jpg" alt="grilled cheese" className="hidden"/>
              </div>
            </div>

            {/* warrior */}
            <div className="column">
              <div id="warrior" className="ui small fade reveal image">
                <img src="/images/body/warrior.png" alt="warrior" className="visible content"/>
                <img src="/images/body/usmc.jpg" alt="usmc" className="hidden"/>
              </div>
            </div>

            {/* entrepreneur */}
            <div className="column">
              <div id="entrepreneur" className="ui small fade reveal image">
                <img src="/images/body/entrepreneur.png" alt="entrepreneur" className="visible content"/>
                <img src="/images/body/allthingsfrenchielogo.png" alt="allthingsfrenchie" className="hidden"/>
              </div>
            </div>

            {/* consultant */}
            <div className="column">
              <div id="consultant" className="ui small fade reveal image">
                <img src="/images/body/consultant.png" alt="consultant" className="visible content"/>
                <img src="/images/body/consulting.jpg" alt="consulting" className="hidden"/>
              </div>
            </div>

          </div>
        </div>

        <div className="ui horizontal divider">Worked with</div>

        {/* Company Modals */}

        {/* nyse modal */}
        <div className="ui modal nyse">
          <i className="close icon"></i>
          <div className="header">
            NYSE
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/nyse.png" alt="nyse"/>
            </div>
            <div className="description">
              <div className="ui header"> New York Stock Exchange </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* nyse modal */}
        <div className="ui modal sade">
          <i className="close icon"></i>
          <div className="header">
            Sade Wellness
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/sade.jpg" alt="sade"/>
            </div>
            <div className="description">
              <div className="ui header"> Sade Wellness </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* microsoft modal */}
        <div className="ui modal microsoft">
          <i className="close icon"></i>
          <div className="header">
            Microsoft
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/microsoft.jpg" alt="microsoft"/>
            </div>
            <div className="description">
              <div className="ui header"> Microsoft </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>


        {/* pepsico modal */}
        <div className="ui modal pepsico">
          <i className="close icon"></i>
          <div className="header">
            Pepsico
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/Pepsico.png" alt="pepsico"/>
            </div>
            <div className="description">
              <div className="ui header"> Pepsico </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* brooklyn modal */}
        <div className="ui modal brooklyn">
          <i className="close icon"></i>
          <div className="header">
            Brooklyn Brewery
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/brooklyn.png" alt="brooklyn"/>
            </div>
            <div className="description">
              <div className="ui header"> Brooklyn Brewery </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* milbon modal */}
        <div className="ui modal milbon">
          <i className="close icon"></i>
          <div className="header">
            Milbon
          </div>
          <div className="image content">
            <div className="ui large image">
              <img src="/images/body/companies/milbon.png" alt="microsoft"/>
            </div>
            <div className="description">
              <div className="ui header"> Milbon USA, Inc </div>
              <p>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."</p>
            </div>
          </div>
        </div>

        {/* worked with company lists*/}
        <div className="ui tiny images company">
          <img className="companylogo" id="nyse" src="images/body/companies/nyse.png" alt="nyse"/>
          <img className="companylogo" id="sade" src="images/body/companies/sade.jpg" alt="sade wellness"/>
          <img className="companylogo" id="microsoft" src="images/body/companies/microsoft.jpg" alt="microsoft"/>
          <img className="companylogo" id="pepsico" src="images/body/companies/Pepsico.png" alt="pepsico"/>
          <img className="companylogo" id="brooklyn" src="images/body/companies/brooklyn.png" alt="brooklyn brewery"/>
          <img className="companylogo2" id="milbon" src="images/body/companies/milbon.png" alt="milbon"/>
        </div>

        {/* */}

      </div>
    )
  }
}

export default Body;
