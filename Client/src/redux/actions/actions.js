import axios from "axios";
import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, GET_FAV } from "./actions_types";

const URL = 'http://localhost:3001/rickandmorty/'

export const addFav = (payload) => {
    return async (dispatch) => {
      try {
        const { data } = await axios.post(`${URL}/fav`, payload);
  
        console.log(data);
  
        return dispatch({
          type: ADD_FAV,
          payload: data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  };
  
  export const removeFav = (id) => {
    return async function (dispatch) {
      try {
        const { data } = await axios.delete(`${URL}/fav/${id}`);
  
        console.log(data);
        return dispatch({
          type: REMOVE_FAV,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const getFav = () => {
      return async (dispatch) => {
         try {
          const { data } = await axios(`${URL}/fav`);
          console.log(data);
          return dispatch({
              type: GET_FAV,
              payload:data
          })
          
         } catch (error) {
          
         }
      }
  }

  export const filterCards = (gender) => {
    return {
      type: FILTER,
      payload: gender,
    };
  };
  
  export const orderCards = function (payload) {
    return {
      type: ORDER,
      payload,
    };
  };
  