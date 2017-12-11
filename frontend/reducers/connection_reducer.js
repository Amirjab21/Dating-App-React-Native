import merge from 'lodash/merge';

import {
  RECEIVE_CONNECTIONS,
  RECEIVE_CONNECTIONS_ERRORS
} from '../actions/connection_actions';

const defaultState = Object.freeze({
  connections: [],
  errors: []
});

export default ConnectionReducer = (state = defaultState, action) => {
  Object.freeze(state)
  switch(action.type) {

    case RECEIVE_CONNECTIONS:
      const connections = action.connections;

      return merge({}, state, {
        connections
      });
      break;

    case RECEIVE_CONNECTIONS_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
      break;

    default:
      return state;
  }
};
