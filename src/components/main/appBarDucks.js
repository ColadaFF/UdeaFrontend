import Immutable from 'immutable';

// Actions
const TOGGLE = 'udea/appBar/TOGGLE';

const initialState = Immutable.Map({
    leftBarOpened: false
});

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
    case TOGGLE:
        return state.set('leftBarOpened', !state.get('leftBarOpened'));
    default:
        return state;
    }
}

// Action Creators
export const toggleLeftBar = () => ({type: TOGGLE});
