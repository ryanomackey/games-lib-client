'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {toggleLibraryOrder} from '../actions/libraryActions';
import {togglePlatformDropdown} from '../actions/libraryActions';
import {toggleReleaseOrder} from '../actions/libraryActions';
import {toggleCompletedFilter} from '../actions/libraryActions';
import Platform from './Platform';
import LibrarySearch from './LibrarySearch';

@connect((store) => {
  return {
    library: store.library
  };
})

export default class FilterBar extends React.Component {
  toggleLibraryOrder() {
    this.props.dispatch(toggleLibraryOrder());
  }

  togglePlatformDropdown() {
    this.props.dispatch(togglePlatformDropdown());
  }

  toggleReleaseOrder() {
    this.props.dispatch(toggleReleaseOrder());
  }

  toggleCompletedFilter() {
    this.props.dispatch(toggleCompletedFilter());
  }

  render() {
    const {library} = this.props;
    let incompleteIcon = 'check_box_outline_blank';
    if (library.showIncompleteOnly) {
      incompleteIcon = 'check_box';
    } else {
      incompleteIcon = 'check_box_outline_blank';
    }
    return (
      <div id="filter-bar">
        <div className="row" style={{margin:'10px'}}>
          <LibrarySearch/>
        </div>
        <div className="row" style={{marginBottom:'1%'}}>
          <div className="col s3">
            <a onClick={this.toggleLibraryOrder.bind(this)} className="btn btn-large btn-block">
              <i className="material-icons right">sort_by_alpha</i>Title:
            </a>
          </div>
          <div className="col s3">
            <a onClick={this.toggleReleaseOrder.bind(this)} className="btn btn-large btn-block">
              <i className="material-icons right">history</i>Release:
            </a>
          </div>
          <div className="col s3">
            <a onClick={this.toggleCompletedFilter.bind(this)} className="btn btn-large btn-block">
              <i className="material-icons right">{incompleteIcon}</i>Incomplete:
            </a>
          </div>
          <div className="col s3">
            <a onClick={this.togglePlatformDropdown.bind(this)} className="btn btn-large btn-block">
              <i className="material-icons right">{library.platformArrow}</i>Platform:
            </a>
          </div>
        </div>
        <div className="row" style={{marginBottom:'0'}}>
          <div className="col s12 right-align">
            <Platform />
          </div>
        </div>
      </div>
    )
  }
}
