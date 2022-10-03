

export function showInfo(){
    return function (dispatch){
        return fetch("https://www.cheapshark.com/api/1.0/deals")
        .then((response)=>response.json())
        .then((data)=>{dispatch({type:"SHOW_INFO",payload:data})})
    }
};

export const removeCart = (remover)=>{
    return {
        type: REMOVE_CART, payload:remover
    }
};

export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SHOW_INFO = "SHOW_INFO"

