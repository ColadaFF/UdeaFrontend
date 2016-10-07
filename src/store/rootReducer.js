import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import { combineEpics } from 'redux-observable';
import appReducer from '../components/main/appBarDucks';

export const rootEpic = combineEpics(
);

export const rootReducer = combineReducers({
    form: formReducer,
    app: appReducer
});