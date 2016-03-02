'use strict';

import _ from 'lodash';
import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

let initJurisdiction = {
  data: {
    state: {}
  },
  notFound: false
};

const jurisdiction = function (state = initJurisdiction, action) {
  state = _.cloneDeep(state);

  switch (action.type) {
  case 'RECEIVE_JURISDICTION':
    state.data = action.data;
    break;
  case 'RESET_JURISDICTION':
    state = initJurisdiction;
    break;
  case 'NOTFOUND_JURISDICTION':
    state.notFound = true;
    break;
  }

  return state;
};

const pages = function (page = {}, action) {
  page = _.cloneDeep(page);

  switch (action.type) {
  case 'RECEIVE_PAGES':
    page[action.data.slug] = action.data;
  }

  return page;
};

const states = function (state = [], action) {
  state = _.cloneDeep(state);

  switch (action.type) {
  case 'RECEIVE_STATES':
    state = action.data;
  }

  return state;
};

const state_jurisdictions = function (state = {}, action) {
  state = _.cloneDeep(state);

  switch (action.type) {
  case 'RECEIVE_STATE_JURISDICTIONS':
    state[action.data.state_id] = action.data;
    break;
  }

  return state;
};

export default combineReducers({
  jurisdiction,
  states,
  pages,
  state_jurisdictions,
  routing: routeReducer
});
