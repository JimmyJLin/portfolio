import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Carousel extends Component {
  render(){
    return (
      <div id="carousel">
        <div id="main" className="flexslider">
          <ul className="slides">

            <li>
              <img src="images/slider/pellhair_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">22 Pell Hair Salon</h2>
                  <p id="floatleft"> 22 Pell Hair salon the located in the heart of Chinatown, NYC is the gold standard in Cut, Color and Thermal Reconditioning.</p>
                  <Link to="/portfolio#liweibeauty" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/liwei_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">LIWEI BEAUTY</h2>
                  <p id="floatleft">LiWei Beauty is a full service salon / spa offering varities of facials, skincare and permenant eyebrow tattoo services.</p>
                  <Link to="/portfolio#liweibeauty" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/soho_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">SOHO DUCK</h2>
                  <p id="floatleft">Guided (SoHo) tour iOS App from the perspective of a local - showcasing the off the beat sites, resturants, bars and shopping destinations.</p>
                  <Link to="/portfolio#sohoduck" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/sprinkle_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">SPRINKLE</h2>
                  <p id="floatleft">Kayak of Job Search, Sprinkle makes job searching a little more enjoyable by combining multiple job search sites into one.</p>
                  <Link to="/portfolio#sprinkle" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/mood_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">MOO-D</h2>
                  <p id="floatleft">Mood sharing app where each user can create and share their current activity and emotional states with friends and the rest of the world.</p>
                  <Link to="/portfolio#mood" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/puppy_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">PUPPY-RACE</h2>
                  <p id="floatleft">French Bulldogs inspired Monopoly type turn based board game for all ages.</p>
                  <Link to="/portfolio#puppyrace" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

            <li>
              <img src="images/slider/allthingsfrenchie_slide.png" />
              <div className="banner-text">
                <div className="banner-text-inner">
                  <h2 id="floatleft">ALLTHINGSFRENCHIE</h2>
                  <p id="floatleft">Allthingsfrenchie is an e-commerce fashion boutique inspired by our two French Bulldogs and their friends.</p>
                  <Link to="/portfolio#allthingsfrenchie" id="floatleft" className="ui button">Details</Link>
                </div>
              </div>
            </li>

          </ul>

        </div>

      </div>
    )
  }
}
