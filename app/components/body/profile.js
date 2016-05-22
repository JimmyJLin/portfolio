import React, { Component } from 'react';

export default class Topic extends Component {
  render(){
    return(
      <div>

        {/* profile */}
        <div>
          <h2 className="ui center aligned icon header">
            <i className="circular users icon"></i>
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
          <h4 className="ui header">Message</h4>
          <p>Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei ex natum rebum iisque.</p>
        </div>


      </div>
    )
  }
}
