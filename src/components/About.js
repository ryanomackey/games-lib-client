'use strict';

import React from 'react';
import Navbar from './Navbar';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="row" style={{marginTop:'10%'}}>
            <div className="col s12">
              <div>
                <h1 style={{display:'inline-block',marginRight:'1%'}}><strong>Games.lib</strong></h1>
                <p className="flow-text" style={{display:'inline-block'}}>is a library tracking application for players with large video game collections.</p>
              </div>
              <hr/>
            </div>
          </div>
          <div className="row" style={{margin:'10% 0 10% 0'}}>
            <div className="col s12 m4 l4 center">
              <img className="responsive-image circle" src="http://res.cloudinary.com/dh55hnjfm/image/upload/plusImage_po1ddg"/>
              <h4>Add Titles</h4>
              <p>Browse a rich database of games to add to your collection, and keep track of which ones you've finished.</p>
            </div>
            <div className="col s12 m4 l4 center">
              <img className="responsive-image circle" src="http://res.cloudinary.com/dh55hnjfm/image/upload/c_thumb,h_194,w_194/v1474936820/wishlist.png"/>
              <h4>View Wishlist</h4>
              <p>See a list of games you're looking to add to your collection along with current prices pulled from Amazon.</p>
            </div>
            <div className="col s12 m4 l4s center">
              <img className="responsive-image circle" src="http://res.cloudinary.com/dh55hnjfm/image/upload/c_scale,h_194,w_194/v1474937742/twitch.png"/>
              <h4>Watch Twitch</h4>
              <p>Check out footage from titles in your library, streaming live from Twitch.</p>
            </div>
          </div>
          <hr/>
          <div className="row" style={{margin:'10% 0 10% 0'}}>
            <div className="col s12">
              <p className="flow-text">Games.lib was built by <a href="https://ryanomackey.com" target="_blank">Ryan Mackey</a> while attending a Web Development bootcamp at <a href="http://www.galvanize.com/" target="_blank">Galvanize</a>, using:</p>
              <h4 className="tech-stack"><a href="https://facebook.github.io/react/" target="_blank">React</a></h4>
              <h4 className="tech-stack"><a href="http://redux.js.org/" target="_blank">Redux</a></h4>
              <h4 className="tech-stack"><a href="https://nodejs.org/" target="_blank">Node</a></h4>
              <h4 className="tech-stack"><a href="https://expressjs.com/" target="_blank">Express</a></h4>
              <h4 className="tech-stack"><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></h4>
              <p className="flow-text">with APIs from:</p>
              <h4 className="tech-stack"><a href="http://www.giantbomb.com/api/" target="_blank">GiantBomb</a></h4>
              <h4 className="tech-stack"><a href="https://steamcommunity.com/dev" target="_blank">Steam</a></h4>
              <h4 className="tech-stack"><a href="https://github.com/justintv/Twitch-API" target="_blank">Twitch</a></h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
