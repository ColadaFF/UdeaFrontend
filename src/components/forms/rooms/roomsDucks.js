import Immutable from 'immutable';
import api from '../../../middleware/api';
import {Observable} from 'rxjs';

//Actions
const SAVE = 'udea/rooms/SAVE';
const UPDATE = 'udea/rooms/UPDATE';
const LIST = 'udea/rooms/LIST';
const LIST_FULFILLED = 'udea/rooms/LIST_FULFILLED';
const LOAD_FULFILLED = 'udea/rooms/LOAD_FULFILLED';
const SAVE_FULFILLED = 'udea/rooms/SAVE_FULFILLED';
const DELETE = 'udea/rooms/DELETE';
const LOAD = 'udea/rooms/LOAD';


//Reducers
const initialState = Immutable.Map({
    all: [],
    current: {}
});

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case SAVE:
    case UPDATE:
    case LOAD_FULFILLED:
    case DELETE:
        return state.set('current', action.payload);
    case LIST_FULFILLED:
        return state.set('all', action.payload);
    default:
        return state;
    }
}


//Action creators.

export const saveRoom = room => ({type: SAVE, payload: room});
export const updateRoom = room => ({type: UPDATE, payload: room});
export const deleteRoom = room => ({type: DELETE, payload: room});
export const loadRoom = id => ({type: LOAD, payload: id});
export const listRooms = (limit, skip) => ({type: LIST, limit, skip});
export const listRoomsFulfilled = payload => ({type: LIST_FULFILLED, payload: payload});
export const loadRoomFulfilled = payload => ({type: LOAD_FULFILLED, payload: payload});
export const upsertRoomFulfilled = payload => {
    return {
        type: SAVE_FULFILLED,
        payload: payload
    };
};


// Epics

export const saveRoomEpic = action$ => action$
    .ofType(SAVE)
    .mergeMap(action => {
        const room = action.payload;
        const promise = api.post("/rooms", room);
        return Observable.fromPromise(promise);
    })
    .mapTo(upsertRoomFulfilled());

export const updateRoomEpic = action$ => action$
    .ofType(UPDATE)
    .mergeMap(action => {
        const room = action.payload;
        const promise = api.put("/rooms", room);
        return Observable.fromPromise(promise);
    })
    .mapTo(upsertRoomFulfilled());

export const loadRoomsEpic = action$ => action$
    .ofType(LIST)
    .mergeMap(action => {
        const promise = api.get("/rooms");
        return Observable
            .fromPromise(promise)
            .map(response => response.data)
            .map(listRoomsFulfilled);
    });

export const loadRoomEpic = action$ => action$
    .ofType(LOAD)
    .mergeMap(action => {
        const promise = api.get(`/rooms/${action.payload}`);
        return Observable
            .fromPromise(promise)
            .map(response => response.data)
            .map(loadRoomFulfilled);
    });


