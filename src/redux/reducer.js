import {combineReducers} from 'redux';

const initialState = {
  name: 'Chaerul Umam',
};

const initialStateRegister = {
  form: {
    fullName: '',
    email: '',
    password: '',
  },
  title: 'Register Page',
  desc: 'This is a Register page',
};

const ReducerRegister = (state = initialStateRegister, action) => {
  if (action.type === 'SET_TITLE') {
    return {
      ...state,
      title: 'Change register Title',
    };
  }

  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }

  return state;
};

const initialStateLogin = {
  form: {
    email: '',
    password: '',
  },

  info: 'Please enter your password',
  isLogin: true,
};

const ReducerLogin = (state = initialStateLogin, action) => {
  if (action.type === 'SET_FORM') {
    return {
      ...state,
      form: {
        ...state.form,
        [action.inputType]: action.inputValue,
      },
    };
  }
  return state;
};

const reducer = combineReducers({
  ReducerRegister,
  ReducerLogin,
});

export default reducer;
