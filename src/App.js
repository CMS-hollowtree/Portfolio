import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import About from './components/aboutComponent/about';
import HomePage from './components/pages/homePage';
import Projects from './components/projectsComponent/projects';
import Instagram from './components/instagramComponent/instagram';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Header /> 
         <HomePage className="home"/>
         
         <Projects />
         <About />
         <Instagram />
         <Footer />
      </div>
    );
  }
}

export default App;
