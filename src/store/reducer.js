const initialState = {
    counter: 0
}

//Reducer
const reducer = (state = initialState, action) => {
switch(action.type){
    case 'INCREMENT':
        return {
            counter: state.counter+1
        }
    case 'DECREMENT':
        return {
            counter: state.counter-1
        }
    case 'ADD_5':
        return {
            counter: state.counter+action.value
        }
    case 'SUB_5':
        return {
            counter: state.counter-action.value
        }

}
    // if(action.type === 'INCREMENT'){
    //     return {
    //         counter: state.counter+1
    //     }
    // };
    // if(action.type === 'DECREMENT'){
    //     return {
    //         counter: state.counter-1
    //     }
    // };
    // if(action.type === 'ADD_5'){
    //     return {
    //         counter: state.counter+action.value
    //     }
    // };
    // if(action.type === 'SUB_5'){
    //     return {
    //         counter: state.counter-action.value
    //     }
    // };
    return state;
}

export default reducer;