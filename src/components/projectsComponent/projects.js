import React, { Component } from 'react';
import flapGif from './../../flappy.gif';

class Projects extends Component {

  render() {
    return (
    	<div id="projects" name="projects" class="projects">
    		<div class="projects text-uppercase">
    			<h2><span class="fas fa-laptop-code" aria-hidden="true"></span> Projects</h2>
    			<div class="container dark-gray-font">
			        <div class="row">
			        	<h4><span class="fab fa-android" aria-hidden="true"></span> Mobile Apps</h4>
			        	
			          <div class="col-md-6">
			          	<div class="panel panel-default fixed-width center-block">
			              <div class="panel-header">
			                <h3>THC Podcasts</h3>
			                <p class="text-lowercase">Stream your favorite episodes</p>
			              </div>
			              <div class="panel-body container1">
			               
			                  <img className="image" class="img-responsive center-block" src="https://i.ibb.co/yBJsMxs/Nexus-6-P-Screenshot1.png" />
			                
			                <div class="container">
							  <div class="middle">
							    <div class="text">
							    	<a target="_blank"  href="https://play.google.com/store/apps/details?id=com.hollowtree.thc">
							    		<span class="fab fa-google-play" aria-hidden="true"> &nbsp;</span>
			                		</a>
			                		<a target="_blank"  href="https://github.com/conman1136/THC">
			                			<span class="fab fa-github" aria-hidden="true"></span>
							    	</a>
							    </div>
							  </div>
							</div>
			              </div>
			              <div class="panel-footer text-lowercase">
					        <h3><i class="far fa-clock"></i> 40 hours</h3>
					        <p class="text-uppercase"><i class="fab fa-angular"></i> Ionic + Angular</p><small >2019</small>
			              </div>
			              
			            </div>
			          </div>

			          <div class="col-md-6 container2">
			          	<div class="panel panel-default fixed-width center-block">
				          	<div class="panel-header">
				                <h3>Blockchain Balance</h3>
				                <p class="text-lowercase">Cold Storage and QR reader</p>
				            </div>
			              <div class="panel-body container2">
			                
			                  <img class="img-responsive center-block" src="https://i.ibb.co/5xK5G7L/Nexus-6-P-Screenshot3.png" />
			                
			              </div>
			              <div class="container">
							  <div class="middle">
							    <div class="text">
							    	<a target="_blank"  href="https://play.google.com/store/apps/details?id=com.BlockchainBalance">
							    		<span class="fab fa-google-play" aria-hidden="true"> &nbsp;</span>
			                		</a>
			                		<a target="_blank"  href="https://github.com/conman1136/BlockchainBalance">
			                			<span class="fab fa-github" aria-hidden="true"></span>
							    	</a>
							    </div>
							  </div>
							</div>
			              <div class="panel-footer text-lowercase">
			                <h3><i class="far fa-clock"></i> 70 hours</h3>
			                <p class="text-uppercase"><i class="fab fa-angular"></i> Ionic + Angular</p>
			                <small >2018</small>
			              </div>
			            </div> 
			          </div>
			        </div>

			        <div class="row webApps">
			        	<h4><span class="fab fa-firefox" aria-hidden="true"></span> Web Apps</h4>
			        	<div class="col-md-6">
			          		<div class="panel panel-default fixed-width center-block">
					          	<div class="panel-header">
					                <h3>Elpis Control</h3>
					                <p class="text-lowercase">Remote for Elpis Pandora Radio</p>
					             </div>
				              	<div class="panel-body">
					                <a target="_blank"  href="https://github.com/conman1136/Elpis-Pandora-Remote" target="delatinise-cli">
					                  <img class="img-responsive center-block" src="https://raw.githubusercontent.com/Conman1136/Elpis-Pandora-Remote/master/FlaskElpisScreen.png" />
					                </a>
				              	</div>
				              	<div class="panel-footer text-lowercase">
					                <h3><i class="far fa-clock"></i> 20 hours</h3>
					                <p class="text-uppercase"><i class="fab fa-python"></i> Python + Django</p>
					                <small >2017</small>
					            </div>
			            	</div>
			            </div>

			            <div class="col-md-6">
			          		<div class="panel panel-default fixed-width center-block">
					          	<div class="panel-header">
					                <h3>Satoshi Paper Wallet Generator</h3>
					                <p class="text-lowercase">Make Bitcoin paper wallets</p>
					             </div>
				              	<div class="panel-body">
					                <a target="_blank"  href="https://conman1136.github.io/SatoshiWalletGenerator" target="delatinise-cli">
					                  <img class="img-responsive center-block" src="https://i.ibb.co/9Gw6TxJ/satoshiwallet2.png" />
					                </a>
				              	</div>
				              	<div class="panel-footer text-lowercase">
					                <h3><i class="far fa-clock"></i> 8 hours</h3>
					                <p class="text-uppercase"><i class="fab fa-html5"></i> HTML + JS</p>
					                <small >2017</small>
					            </div>
				            </div> 

				          </div>
			          </div>
			          <div class="row">
			        	<h4><span class="fas fa-gamepad" aria-hidden="true"></span> Browser Games</h4>
			        	<div class="col-md-12">
			          		<div class="panel panel-default fixed-width center-block">
					          	<div class="panel-header">
					                <h3>Flappy Block</h3>
					                <p class="text-lowercase">Flappy Bird Clone</p>
					             </div>
				              	<div class="panel-body">
					                <a target="_blank"  href="https://conman1136.github.io/FlapAss/index" target="delatinise-cli">
					                  <img class="img-responsive center-block" src={flapGif} />
					                </a>
				              	</div>
				              	<div class="panel-footer text-lowercase">
					                <h3><i class="far fa-clock"></i> 8 hours</h3>
					                <p class="text-uppercase"><i class="fas fa-dice-d20"></i> Phaser</p>
					                <small >2018</small>
					            </div>
			            	</div>
			            </div>

			        

			        </div>
			    </div>
    		</div>
    	</div>
    	
    );
  }
}

export default Projects;
