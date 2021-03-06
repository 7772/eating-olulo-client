import {combineReducers} from 'redux';

import * as User from './User';


const reducers = combineReducers({
  User: User.reducer,
});

export {
  reducers,
  User,
};
