import React, { Component } from 'react';

class About extends Component {
  render() {
    return (  
    <div id="about" className="container-fluid about">
      <h2 className="text-uppercase dark-gray-font text-center"><span class="far fa-user-circle" aria-hidden="true"></span> About me</h2>
      <div className="container">
        <div class="row">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1 col-sm-12">
            <p className="dark-gray-font text-justify">
              <h3 class="text-center text-uppercase"><i class="fas fa-brain"></i> Philisphy</h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-5 col-sm-12">
            <p className="dark-gray-font text-justify">
            <h3 class="text-center text-uppercase"><i class="fas fa-puzzle-piece"></i> Goals</h3>
            	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <h2 className="text-uppercase dark-gray-font text-center"><span class="far fa-user-circle" aria-hidden="true"></span> Skills</h2>
        <div class="row">
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-database"></i> Database</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elita.</p>
            <ul>
              <li>MySql</li>
              <li>Firebase</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-server"></i> Back End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elita.</p>
            <ul>
              <li>Node</li>
              <li>Python</li>
              <li>PHP</li>
            </ul>
          </div>
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-mobile"></i> Front End</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elita.</p>
            <ul>
              <li>Ionic</li>
              <li>Angular</li>
              <li>React</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;