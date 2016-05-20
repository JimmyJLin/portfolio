import React, { Component } from 'react';

class Sohoduck extends Component {

  componentDidMount(){
    console.log('loaded')

    // image pop-up
    $('.ui.pop').popup();

  }

  render(){
    return (
      <div id="sohoduck" className="section active">

        <div className="ui horizontal divider">SoHo Duck</div>
        <h4 className="ui header">
          <p id="portfolioheader">Guided (SoHo) tour iOS App from a perspective of local - showcasing off the beat sites, restaurants, bars and shopping destinations</p>
        </h4>

        <br/>

        <div className="ui tiny images">
          <img id="logosize" src="images/icons/reactnative.png" alt="react native"/>
          <img id="logosize" src="images/icons/javascript.png" alt="javaScript"/>
          <img id="logosize" src="images/icons/firebase.png" alt="firebase"/>
          <img id="logosize" src="images/icons/html.png" alt="html"/>
          <img id="logosize" src="images/icons/css3.png" alt="css3"/>
          <a href="https://tsfr.io/zubpxb">
            <img id="logosize" src="images/icons/testfairy.png" alt="test fairy"/>
          </a>
        </div>

        <div className="ui divider"></div>

        <div className="ui small images">

          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/landing.png" alt="landing page" data-title="Landing Page" data-content="user can signup or login"/>
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/signup.png" alt="signup" data-title="Signup Page" data-content="user can signup with email and password"/>
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/dashboard.png" alt="dashboard" data-title="Dashboard" data-content="dashboard for Map, Restuarants, Additional POIs, and Shopping"/>
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/map.png" alt="map" data-title="Map" data-content="map markers for all the POIs"/>
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/listing.png" alt="listing" data-title="Listings" data-content="listing of various contents"/>
          <img id="hoverimage" className="ui image pop visible" data-lightbox="image-set" src="images/portfolio/sohoduck/listingdetails.png" alt="listing details" data-title="Listing Details" data-content="listing details, can call, visit site or get direction"/>

        </div>

        <div className="ui divider"></div>

      </div>
    )
  }
}

export default Sohoduck;
