'use strict';

import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    wishlist: store.wishlist,
  }
})

export default class WishlistError extends React.Component{
  render() {
    const {wishlist} = this.props;
    const linkStyle = {
      'text-decoration':'underline',
      'color':'red',
    }
    if (wishlist.noWishlist) {
      return (
        <p className="flow-text red-text right-align">Uh oh! Looks like your wishlist is empty. Add some titles you're interested in to your <a style={linkStyle} href="/">library</a>.</p>
      )
    } else if (wishlist.wishlistError) {
      return (
        <p className="flow-text red-text right-align">Uh oh! Looks like there was a problem retrieving your wishlist. Please try again later.</p>
      )
    } else {
      return null;
    }
  }
}
