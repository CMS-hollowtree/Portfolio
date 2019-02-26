import React, { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed';

class Instagram extends Component {
  render() {
    return (
      <div className="container-fluid ig">
      	<h2><span class="fas fa-camera-retro" aria-hidden="true"></span> TRAVEL PHOTOGRAPHY</h2>
      	<p>When im not at my desk, this is where youll find me</p>
      	<br />
      	<div className="row">
      		<div className="col-lg-4 igdiv">
		      	<InstagramEmbed
				  url='https://instagr.am/p/Bmg5u4AHK7E/'
				  maxWidth={1000}
				  hideCaption={true}
				  containerTagName='instagram-embed'
				  protocol=''
				  injectScript
				  onLoading={() => {}}
				  onSuccess={() => {}}
				  onAfterRender={() => {}}
				  onFailure={() => {}}
				/>
			</div>
			<div className="col-lg-4 igdiv">
				<InstagramEmbed
				  url='https://instagr.am/p/BmOqZBZHJdv/'
				  maxWidth={1000}
				  hideCaption={true}
				  containerTagName='instagram-embed'
				  protocol=''
				  injectScript
				  onLoading={() => {}}
				  onSuccess={() => {}}
				  onAfterRender={() => {}}
				  onFailure={() => {}}
				/>
			</div>
			<div className="col-lg-4 igdiv">
				<InstagramEmbed
				  url='https://instagr.am/p/BmzLh_RHMOf/'
				  maxWidth={1000}
				  hideCaption={true}
				  containerTagName='instagram-embed'
				  protocol=''
				  injectScript
				  onLoading={() => {}}
				  onSuccess={() => {}}
				  onAfterRender={() => {}}
				  onFailure={() => {}}
				/>
			</div>
			
		</div>
      </div>
    );
  }
}

export default Instagram;
