export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUB';
export const STORED_RESULT = 'STORED_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


export const increment = ()=>{
    return{
        type: INCREMENT
    }
};
export const decrement = ()=>{
    return{
        type: DECREMENT
    }
};
export const add = (val)=>{
    return{
        type: ADD,
        value: val
    }
};
export const subtract = (val)=>{
    return{
        type: SUBSTRACT,
        value: val
    }
};
export const storedResult = (res)=>{
    return{
        type: STORED_RESULT,
        result: res
    }
};
export const deleteResult = (resId)=>{
    return{
        type: DELETE_RESULT,
        resultId: resId
    }
}