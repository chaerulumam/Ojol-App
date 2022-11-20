import {combineReducers} from 'redux';

const initialState = {
  name: 'Chaerul Umam',
};

const initialStateRegister = {
  title: 'Register Page',
  desc: 'This is a Register page',
};

const ReducerRegister = (state = initialStateRegister, action) => {
  return state;
};

const initialStateLogin = {
  info: 'Please enter your password',
  isLogin: true,
};

const ReducerLogin = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  ReducerRegister,
  ReducerLogin,
});

export default reducer;
