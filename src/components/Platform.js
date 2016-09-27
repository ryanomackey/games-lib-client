'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {togglePlatform} from '../actions/libraryActions';
import Stagger from 'react-css-stagger';

@connect((store) => {
  return {
    library: store.library
  };
})

export default class Platform extends React.Component {

  togglePlatform(event) {
    this.props.dispatch(togglePlatform(event.target.id));
  }

  render() {
    const {library} = this.props;
    const style = {display:'inline-block',width:'150px',marginRight:'1%'};
    if (library.platformDropdown) {
      return (
        <Stagger transition="fadeIn" delay={75} style={{display:'flex',justifyContent:'flex-end',alignItems:'center'}}>
          {library.platforms.map((platform, index) => {
            return (
              <p key={index} style={{display:'inline-block',marginRight:'1.5%'}}>
                <input type="checkbox" id={platform.name} defaultChecked={platform.selected} onClick={this.togglePlatform.bind(this)}/>
                <label htmlFor={platform.name} style={{paddingLeft:'25px'}}>{platform.name}</label>
              </p>
            )
          })}
        </Stagger>
      )
    } else {
      return null;
    }
  }
}
