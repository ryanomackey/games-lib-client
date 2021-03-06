'use strict';

import React from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';
import {getWishlist} from '../actions/wishlistActions';
import WishlistItem from './WishlistItem';
import WishlistLoading from './WishlistLoading';
import WishlistError from './WishlistError';

@connect((store) => {
  return {
    library: store.library,
  };
})

export default class Wishlist extends React.Component{
  componentWillMount() {
    this.props.dispatch(getWishlist());
  }
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col s12">
              <h1 style={{display:'inline-block'}}><strong>Wishlist</strong></h1>
              <WishlistLoading/>
              <hr/>
            </div>
          </div>
          <WishlistError/>
          <WishlistItem/>
        </div>
      </div>
    )
  }
}
