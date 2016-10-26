import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {combineEpics} from 'redux-observable';
import appReducer from '../components/main/appBarDucks';
import roomReducer, {loadRoomsEpic, saveRoomEpic, loadRoomEpic, updateRoomEpic} from '../components/forms/rooms/roomsDucks';

export const rootEpic = combineEpics(
    loadRoomEpic,
    loadRoomsEpic,
    saveRoomEpic,
    updateRoomEpic
);

export const rootReducer = combineReducers({
    form: formReducer,
    app: appReducer,
    rooms: roomReducer
});