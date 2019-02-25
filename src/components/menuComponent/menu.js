import React, { Component } from 'react';
import { push as Menu } from 'react-burger-menu';

class SideMenu extends Component {
	handleStateChange(newState) {
		console.log(newState);
	  window.setTimeout(() => { // This is necessary to force the blur to happen after in the event loop
	    if (newState.isOpen) {
	      document.activeElement.blur();
	    }
	  });
	}
  render() {
    return (
      <div className="container-fluid" class="text-uppercase">
      	<Menu onStateChange={this.handleStateChange}>
      		 <img src="https://i.ibb.co/hXBryxw/37811224-224696981525394-7326609681739153408-n-2.jpg" alt="Avatar" className="avatar" /> 
	       <a className="menu-item" href="#home">Home</a>
	       <a className="menu-item" href="#about">About</a>
	       <a className="menu-item" href="#projects">Projects</a>
	       <a className="menu-item" href="#contact">Contact</a>
	   
      	</Menu>
      </div>
    );
  }
}

export default SideMenu;
