
export default function filmsReducer(state = {}, action) {

    switch (action.type) {
        case "GET_FILMS":
            return {
                ...state,
                films: action.payload
            };
        case "SELECTED_FILM":
            return {...state, selected:action.payload};
        default:
            return state;
    }
}