import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV } from './actions/actions_types'

const initialState = {
    myFavorites:[],
    allCharacters:[]
}

function rootReducer(state = initialState, { type, payload }) {
    switch(type){
        case ADD_FAV:
            return {
                ...state,
                myFavorites:payload,
                allCharacters: payload
            } 
        case FILTER:
            const filtered = state.allCharacters.filter(char => char.gender === payload)
            return {
                ...state,
                myFavorites: payload === 'All' ? state.allCharacters : filtered
            }
        case ORDER:
            const orderChar = state.myFavorites.sort((x,y) => {
                if(payload === 'A'){
                    return x.id - y.id;
                } else {
                    return y.id - x.id;
                }
            })
            return {
                ...state,
                myFavorites:[...orderChar]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites:payload
            }
        case GET_FAV:
            return {
                ...state,
                myFavorites:payload,
                allCharacters:payload
            }

        default:
            return {...state}
    }
}

export default rootReducer;