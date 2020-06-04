import * as actionTypes from '../actions/actionTypes';

export const savedResult = (res) =>{
    // const updatedResult = res*2;
    return{
        type: actionTypes.STORED_RESULT,
        result: res
    }
}
export const storedResult = (res)=>{
    //Asynchronous code.
   return (dispath, getState) => {
       setTimeout(() => {
        //    const oldCounter =  getState().ctr.counter;
        //    console.log(oldCounter)
           dispath(savedResult(res))
       }, 2000)
   }
};
export const deleteResult = (resId)=>{
    return{
        type: actionTypes.DELETE_RESULT,
        resultId: resId
    }
}