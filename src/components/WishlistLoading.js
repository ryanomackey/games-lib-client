'use strict';

import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    wishlist: store.wishlist,
  }
})

export default class extends React.Component {
  render() {
    const {wishlist} = this.props;
    if (wishlist.showLoader) {
      return (
        <div className="preloader-wrapper small active" style={{margin:'0 0 0 2%'}}>
          <div className="spinner-layer spinner-teal-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}
