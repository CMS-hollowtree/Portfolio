import React, { Component } from 'react';
import Typed from 'typed.js';

class HomePage extends Component {


  render() {
    return (
      <div id="home" className="container-fluid fill home">
      	<div className="intro">
			Hi, my name is <strong>Conor </strong>
			and I'm<br /> <span
            style={{ whiteSpace: 'pre' }}
            ref={(el) => { this.el = el; }}
         /> 
        <br />
        <p>living in <strong>America</strong>.</p>
      	</div>
      </div>
    );
  }


componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
    	strings: [
	    	"a Front-End Developer,",
	    	"a Freelance Programmer,",
	    	"a Travel Photographer,",
	    	"a Blockchain Enthusiest,", 
	    	"a Digital Nomad,"
    	],
     	typeSpeed: 45,
     	backSpeed: 30,
     	loop: true,
            shuffle: true,
};
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }
}

export default HomePage;
