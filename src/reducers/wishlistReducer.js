'use strict';

const initialState = {
  wishlist: [],
  showLoader: false,
  noWishlist: false,
  wishlistError: false,
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "GET_WISHLIST_START": {
      return Object.assign({}, state, {
        showLoader: true,
        wishlistError: false,
      });
    }
    case "GET_WISHLIST_SUCCESS": {
      if (!action.payload.length) {
        var noWishlist = true;
      } else {
        noWishlist = false;
      }
      return Object.assign({}, state, {
        wishlist: action.payload,
        showLoader: false,
        noWishlist: noWishlist,
        wishlistError: false,
      });
    }
    case "GET_WISHLIST_ERROR": {
      return Object.assign({}, state, {
        showLoader: false,
        wishlistError: true,
      })
    }
    default: {
      return state;
    }
  }
}
