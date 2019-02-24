import React, { Component } from 'react';

class About extends Component {
  render() {
    return (  
    <div id="about" className="container-fluid about">
      <h2 className="text-uppercase dark-gray-font text-center"><span class="far fa-user-circle" aria-hidden="true"></span> About me</h2>
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-md-offset-1 col-sm-12">
            <p className="dark-gray-font text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col-md-5 col-sm-12">
            <p className="dark-gray-font text-justify">
            	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;