import _ from 'lodash';

const initialState = {
  signupData: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log("reducer payload: ",action.payload)
      return _.assign({}, state, { signupData: action.payload });
    default:
      return state;
  }
};