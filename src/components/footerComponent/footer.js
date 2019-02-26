import React, { Component } from 'react';
import logo from './../../logo.svg';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div id="contact" class="footer">
          <div class="container">
            <div class="row">
              <div class="container email-btn">
                
                <a href="mailto:ConorSullivan028@gmail.com" target="_blank" class="contact-button">
                    Contact <i class="far fa-paper-plane"></i>
                    
                    <span className="email" class="text-center">EMAIL</span>
                </a>
              </div>
              <br />
              <p class="text-center light-white-font">
                <a class="middle-blue-font" href="https://github.com/conman1136" title="Github" target="github"><strong><i class="fab fa-github"></i></strong></a>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;  
                <a class="middle-blue-font" href="https://www.linkedin.com/" title="Linkedin" target="codepen"><strong><i class="fab fa-linkedin-in"></i></strong></a>
                &nbsp;&nbsp;&bull;&nbsp;&nbsp;
                <a class="middle-blue-font" href="https://www.minds.com/AnonFPV" title="Minds" target="so"><strong><i class="far fa-lightbulb"></i></strong></a>
              </p>
            </div>
            <div class="row">
              <a target="_blank" href="https://reactjs.org/">
                <img src={logo} className="App-logo" alt="logo" />
              </a>
            </div>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
