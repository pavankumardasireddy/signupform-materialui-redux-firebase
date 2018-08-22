import _ from 'lodash';

const initialState = {
  signupData: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return _.assign({}, state, { signupData: action.payload });
    default:
      return state;
  }
};