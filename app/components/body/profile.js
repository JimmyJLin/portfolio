import React, { Component } from 'react';

export default class Topic extends Component {
  render(){
    return(
      <div>

        {/* profile */}
        <div>
          <h2 className="ui center aligned icon header">
            <img src="images/body/header/jimmy.png" alt="jimmy"/>
            <br/>
            Jimmy J. Lin
          </h2>
        </div>

        {/* Contact Info */}
        <div className="ui two column centered grid">
          <div className="four column centered row">
            <div className="column">
              <h3 id="alignright">
              <a href="tel:3474392567">
                <i className="icon phone square"></i>
                (347) 439-2567
              </a>
              </h3>
            </div>
            <div className="ui vertical divider"></div>
            <div className="column">
              <h3>
                <a href="mailto:jimmyjinglin2gmail.com">
                  <i className="icon mail"></i>
                  jimmyjinglin@gmail.com
                </a>
              </h3>
            </div>
          </div>

          {/* titles */}
          <div className="four column centered row">
            <div className="column">
              <h3 id="alignright">
                Software Engineer
              </h3>
            </div>
            <div className="ui vertical divider"></div>
            <div className="column">
              <h3>
                Business Consultant
              </h3>
            </div>
          </div>
        </div>

        {/* Short Description */}
        <div className="ui middle center aligned piled segment red">
          <h4 className="ui header">Summary</h4>
          <p>As a Web Developer, I thoroughly enjoy the creative process in developing something that I’ve never done before or something that hasn’t been done yet. It’s exhilarating to me when I break everything down into smaller pieces in order to put them back together as how I would want them to be. Because of my background in business development, I understand what users want and how to adhere to the needs both on the back-end and front-end. I’m excited to put my skills to a product that I’m passionate about.</p>
        </div>


      </div>
    )
  }
}
