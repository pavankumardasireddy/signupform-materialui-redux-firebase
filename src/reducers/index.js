import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import registerReducer from './registerReducer';

const rootReducer = combineReducers({
    registerReducer
});

export default rootReducer;