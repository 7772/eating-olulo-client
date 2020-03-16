import {Map} from 'immutable';


// action types
const SET_USER = 'User/SET_USER';
const INIT_USER = 'User/INIT_USER';

// action creators
const setUser = (user: any) => ({
  type: SET_USER,
  payload: {
    id: user.id,
    name: user.name,
    phoneNumber: user.phoneNumber,
    auccountNumber: user.auccountNumber,
    isPayer: user.isPayer,
    isPaid: user.isPaid,
  },
});

const initUser = () => ({
  type: INIT_USER,
});

// initialState
const initialState = Map({
  id: null,
  name: null,
  phoneNumber: null,
  auccountNumber: null,
  isPayer: false,
  isPaid: false,
});

// reducer
const reducer = (
  state: any = initialState,
  action: any,
): any => {
  switch (action.type) {
    case SET_USER:
      return state
        .set('id', action.payload.id)
        .set('name', action.payload.name)
        .set('phoneNumber', action.payload.phoneNumber)
        .set('accountNumber', action.payload.accountNumber)
        .set('isPayer', action.payload.isPayer)
        .set('isPaid', action.payload.isPaid);
    case INIT_USER:
      return state
        .set('id', initialState.get('id'))
        .set('name', initialState.get('name'))
        .set('phoneNumber', initialState.get('phoneNumber'))
        .set('accountNumber', initialState.get('accountNumber'))
        .set('isPayer', initialState.get('isPayer'))
        .set('isPaid', initialState.get('isPaid'));
    default: 
      return state;
  }
};


export {
  reducer,
  setUser,
  initUser,
};
