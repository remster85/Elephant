import { combineReducers } from 'redux';
import ApplicationReducer from './application-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  applicationStore: ApplicationReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
