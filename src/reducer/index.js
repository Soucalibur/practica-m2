import {ADD_CART} from "../actions/index";
import {REMOVE_CART, SHOW_INFO} from "../actions/index"

const initialState = {
  infoJuegos:[]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return{
        ...state

      }
    case "SHOW_INFO":
      return{
        ...state,
        infoJuegos: action.payload
      }
    
    
    default:
      return{
        ...state
      };
  }
    
};

export default reducer;
