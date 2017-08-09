import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/';

export function getActors(peopleList) {
    let promiseArray = peopleList.map(url => axios.get(url));
    return function (dispatch) {
        axios.all(promiseArray)
            .then(function (response) {
                console.log('******people list******', response);
                dispatch({
                    type:"GET_PEOPLE",
                    payload:response
                })
            })
            .catch(function (error) {
                console.log('error getting people list from server', error);
            });
    };
}

export function getPeople() {
    const url = `${ROOT_URL}people/`;
    return function (dispatch) {
        axios.get(url)
            .then(function (response) {
                console.log('******people list******', response);
                dispatch({
                    type:"GET_PEOPLE",
                    payload:response.data
                })
            })
            .catch(function (error) {
                console.log('error getting people list from server', error);
            })
    }
}
