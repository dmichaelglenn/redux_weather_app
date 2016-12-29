import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        //make a new array, put the action data in, and concat with whatever is in the current state array. In redux you don't wanna manipulate the existing state array here but instead return a new one.
            return [action.payload.data, ...state];
    }
    return state;
}