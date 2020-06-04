import * as actionTypes from '../actions/actionTypes'

export const increment = ()=>{
    return{
        type: actionTypes.INCREMENT
    }
};
export const decrement = ()=>{
    return{
        type: actionTypes.DECREMENT
    }
};
export const add = (val)=>{
    return{
        type: actionTypes.ADD,
        value: val
    }
};
export const subtract = (val)=>{
    return{
        type: actionTypes.SUBSTRACT,
        value: val
    }
};
