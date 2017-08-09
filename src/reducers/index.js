import {combineReducers} from 'redux';
import filmsReducers from './filmReducer';
import peopleReducers from './peopleReducer';

export default combineReducers({
    films: filmsReducers,
    people: peopleReducers
})