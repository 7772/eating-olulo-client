import {Map} from 'immutable';


// action types
const SET_USER = 'User/SET_USER';

// action creators
const setUser = (user: any) => ({
  type: SET_USER,
  payload: {
    name: user.name,
    phoneNumber: user.phoneNumber,
    auccountNumber: user.auccountNumber,
    isPayer: user.isPayer,
    isPaid: user.isPaid,
  },
});

// initialState
const initialState = Map({
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
        .set('name', action.payload.name)
        .set('phoneNumber', action.payload.phoneNumber)
        .set('accountNumber', action.payload.accountNumber)
        .set('isPayer', action.payload.isPayer)
        .set('isPaid', action.payload.isPaid);
    default: 
      return state;
  }
};


export {
  reducer,
  setUser,
};
