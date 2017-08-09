import axios from 'axios';

const ROOT_URL = 'https://swapi.co/api/';

export function getFilms() {
    const url = `${ROOT_URL}films`;
    return function (dispatch) {
        axios.get(url)
            .then(function (response) {
                dispatch({
                    type:"GET_FILMS",
                    payload:response.data.results
                })
            })
            .catch(error=>{
                console.log('error getting films from server', error);
            })
    }
}


export function selectedFilm(film) {
    return {
        type:"SELECTED_FILM",
        payload:film
    }
}