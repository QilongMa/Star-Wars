export default function peopleReducer(state = {}, action) {
    switch (action.type){
        case "GET_PEOPLE":
            return {...state, peopleList:action.payload};
        default: return state;
    }
}