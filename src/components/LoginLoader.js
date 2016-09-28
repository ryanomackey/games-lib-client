'use strict';

import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    user: store.user,
  }
})

export default class LoginLoader extends React.Component{
  render() {
    const {user} = this.props;
    if (user.showLoader) {
      return (
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      )
    } else {
      return null;
    }
  }
}
