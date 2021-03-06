'use strict';

import React from 'react';
import { connect } from 'react-redux';
import Nav from './Navbar';
import Login from './Login';
import Library from './Library';
import {getLibrary} from '../actions/libraryActions';
import {getQueryVariable} from '../library/helperFunctions';
import {initializeSteamImport} from '../actions/steamImportActions';

@connect((store) => {
  return {
    user: store.user,
    library: store.library
  };
})

export default class Layout extends React.Component {
  componentWillMount() {
    if (this.props.user.login) {
      this.props.dispatch(getLibrary());
    }
    if (getQueryVariable('steamId') && getQueryVariable('steamImport')){
      const steamId = getQueryVariable('steamId');
      this.props.dispatch(initializeSteamImport(steamId));
    }
  }
  render () {
    return (
      <div>
        <Nav />
        <Login/>
        <Library />
      </div>
    )
  }
}
