import React, { Component } from 'react';


class About extends Component {

  render() {
    return (  
    <div id="about" className="container-fluid about">
      <h2 className="text-uppercase dark-gray-font text-center"><span class="far fa-user-circle" aria-hidden="true"></span> About me</h2>
      <div className="container">
        <div class="row">
          Having moved over a dozen times throughout my childhood, I've always had a love for seeing new places. Even though it wasn't easy changing schools or leaving old friends behind, I was lucky enough to have a home computer with internet. Which, believe it or not, has opened many doors in my life. Today, I'm grateful that freelance programming allows me to travel America and experiance what many only dream of. 
        </div>
        <div className="row">
          <div className="col-md-5 col-md-offset-1 col-sm-12">
            
              <h3 class="text-center text-uppercase"><i class="fas fa-brain"></i> Philosophy</h3>
              <p className="dark-gray-font text-justify">
              The only constant in the world is change. Be open to it and accept it with a smile.<br /><br />Look at each change to your requirements, platform, or tool as a new challenge, not as some serious inconvenience to be fought.
            </p>
          </div>
          <div className="col-md-5 col-sm-12">
           
            <h3 class="text-center text-uppercase"><i class="fas fa-puzzle-piece"></i> Goals</h3>
            <p className="dark-gray-font text-justify">
            	I enjoy creating interfaces that give users an enjoyable experiance, while driving traffic and increasing revenue.<br /><br />If we can eleminate a middle man with the power of web3 and blockchain, even better.
            </p>
          </div>
        </div>

        <h2 className="text-uppercase dark-gray-font text-center"><span class="far fa-user-circle" aria-hidden="true"></span> Skills</h2>
        <div class="row">
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-database"></i> Database</h3>
            <p>Prefer json with something like Firebase.</p>            
         
            
            <div class="container bars">
              <div class="skills mysql"><label class="text-left">MySql</label>&nbsp;</div>
            </div>
         
            <div class="container bars">
              <div class="skills firebase"><label class="text-left">Firebase</label>&nbsp;</div>
            </div>

            
            <div class="container bars">
              <div class="skills mongodb"><label class="text-left">MongoDB</label><p>&nbsp;</p></div>
            </div>
        
          </div>
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-server"></i> Back End</h3>
          <p>Python is to linux as node is to the web.</p>
            
            <div class="container bars">
              <div class="skills node"><label class="text-left">Node</label>&nbsp;</div>
            </div>

            <div class="container bars">
              <div class="skills python"><label class="text-left">Python</label>&nbsp;</div>
            </div>

            <div class="container bars">
              <div class="skills php"><label class="text-left">PHP</label>&nbsp;</div>
            </div>

          </div>
          <div class="col-md-4 text-center"><h3 class="text-uppercase"><i class="fas fa-mobile"></i> Front End</h3>
          <p>Recently started coding in React instead of Angular.</p>
            
            <div class="container bars">
              <div class="skills ionic"><label class="text-left">Ionic</label>&nbsp;</div>
            </div>

            <div class="container bars">
              <div class="skills angular"><label class="text-left">Angular</label>&nbsp;</div>
            </div>

            <div class="container bars">
              <div class="skills react"><label class="text-left">React</label>&nbsp;</div>
            </div>

          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default About;