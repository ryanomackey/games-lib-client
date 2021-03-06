'use strict';

import axios from 'axios';

export function toggleGameSearch() {
  return function(dispatch) {
    dispatch({type: 'TOGGLE_GAME_SEARCH'});
  };
}

export function giantBombSearch(searchQuery) {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    dispatch({type: 'SEARCH_START'});
    instance.get('api/search?query=' + searchQuery)
    .then(function(response) {
      if (response.data.results.length) {
        dispatch({type: 'SEARCH_SUCCESS', payload: response.data});
      } else {
        dispatch({type: 'NO_SEARCH_RESULTS'});
      }
    })
    .catch(function(err) {
      dispatch({type: 'SEARCH_ERROR', payload: err});
    });
  };
}

export function addToLibrary(game) {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    dispatch({type: 'LIBRARY_OPTIMISTIC', payload: game});
    instance.post('games', game)
    .then(function() {
      dispatch({type: 'LIBRARY_POST_SUCCESS'});
    })
    .catch(function(err) {
      dispatch({type: 'LIBRARY_POST_ERROR', payload: err});
    });
  };
}

export function getLibrary() {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    dispatch({type: 'LIBRARY_FETCHING'});
    instance.get('/games')
    .then(function(response) {
      dispatch({type: 'LIBRARY_FETCH_SUCCESS', payload: response.data});
    })
    .catch(function(err) {
      dispatch({type:'LIBRARY_FETCH_ERROR', payload: err});
    });
  };
}

export function toggleLibraryOrder() {
  return function(dispatch) {
    dispatch({type:'TOGGLE_LIBRARY_ORDER'});
  };
}

export function togglePlatformDropdown() {
  return function(dispatch) {
    dispatch({type:'TOGGLE_PLATFORM_DROPDOWN'});
  };
}

export function togglePlatform(platform) {
  return function(dispatch) {
    dispatch({type:'TOGGLE_PLATFORM', payload:platform});
  };
}

export function openGameModal(game) {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    dispatch({type:'OPEN_GAME_MODAL', payload:game});
    instance.get('/api/twitch?q=' + game.game_name)
    .then(function(response) {
      dispatch({type:'STREAM_FETCH_SUCCESS', payload:response.data.streams});
    });
  };
}

export function closeGameModal() {
  return function(dispatch) {
    dispatch({type:'CLOSE_GAME_MODAL'});
  };
}

export function toggleReleaseOrder() {
  return function(dispatch) {
    dispatch({type: 'TOGGLE_RELEASE_ORDER'});
  };
}

export function toggleComplete(game) {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    game.completed = !game.completed;
    instance.put('/games', game)
    .then(function() {
      dispatch({type: 'UPDATE_SUCCESSFUL'});
    });
  };
}

export function toggleOwn(game) {
  const instance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.getItem('token')
    }
  });
  return function(dispatch) {
    game.own = !game.own;
    instance.put('/games', game)
    .then(function() {
      dispatch({type: 'UPDATE_SUCCESSFUL'});
    });
  };
}

export function toggleCompletedFilter() {
  return function(dispatch) {
    dispatch({type:'TOGGLE_COMPLETED_FILTER'});
  };
}

export function removeTitle(game) {
  const bearerToken = sessionStorage.getItem('token');
  const deleteInstance = axios.create({
    baseURL: 'https://games-lib-server.herokuapp.com',
    headers: {'Authorization': 'Bearer ' + bearerToken},
    data: game,
    method: 'DELETE'
  });
  return function(dispatch) {
    dispatch({type:'REMOVE_TITLE_OPTIMISTIC', payload: game});
    deleteInstance.delete('/games')
    .then(function(response) {
      dispatch({type:'DELETE_SUCCESSFUL', payload: response});
    })
    .catch(function(err) {
      dispatch({type:'DELETE_ERROR', payload: err});
    });
  };
}

export function toggleDeleteConfirm() {
  return function(dispatch) {
    dispatch({type:'TOGGLE_DELETE_CONFIRM'});
  };
}

export function updateSearch(searchQuery) {
  return function(dispatch) {
    dispatch({type:'UPDATE_SEARCH', payload: searchQuery});
  };
}

export function setCurrentStream(stream) {
  return function(dispatch) {
    dispatch({type:'SET_CURRENT_STREAM', payload: stream});
  };
}

export function closeTwitchModal() {
  return function(dispatch) {
    dispatch({type:'CLOSE_TWITCH_MODAL'});
  };
}

export function toggleControlBar() {
  return function(dispatch) {
    dispatch({type:'TOGGLE_CONTROL_BAR'});
  };
}
