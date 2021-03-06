'use strict';

const initialState = {
  login: (sessionStorage.token),
  showCreateAccount: false,
  duplicateAccount: '',
  createAccountSuccessMessage: '',
  loginMessage: '',
  showLoader: false,
};

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case "LOGIN_INIT": {
      return Object.assign({}, state, {
        createAccountSuccessMessage: '',
        showLoader: true,
      });
    }
    case "LOGIN_SUCCESS": {
      return Object.assign({}, state, {
        login: true,
        loginMessage: '',
        showLoader: false,
      });
    }
    case "LOGOUT": {
      return Object.assign({}, state, {
        login: false
      });
    }
    case "LOGIN_FAILURE": {
      return Object.assign({}, state, {
        loginMessage: action.payload,
        showLoader: false,
      });
    }
    case "TOGGLE_CREATE_ACCOUNT": {
      return Object.assign({}, state, {
        showCreateAccount: state.showCreateAccount = !state.showCreateAccount,
        loginMessage: state.loginMessage = !state.loginMessage
      });
    }
    case "CREATE_ACCOUNT_DUPLICATE": {
      return Object.assign({}, state, {
        duplicateAccount: action.payload
      });
    }
    case "CREATE_ACCOUNT_SUCCESS": {
      return Object.assign({}, state, {
        showCreateAccount: state.showCreateAccount = !state.showCreateAccount,
        createAccountSuccessMessage: action.payload
      });
    }
    default: {
      return state;
    }
  }
}
