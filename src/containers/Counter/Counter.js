import React, { Component } from 'react';
import {connect} from 'react-redux'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions' 

class Counter extends Component {
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubFiveCounter}  />
                <hr />
                <button onClick={this.props.onStoreResults}>Stored Results</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        ctr: state.counter,
        storedResults: state.results
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: ()=> dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: ()=> dispatch({type: actionTypes.DECREMENT}),
        onAddFiveCounter: ()=> dispatch({type: actionTypes.ADD, value: 5}),
        onSubFiveCounter: ()=> dispatch({type: actionTypes.SUBSTRACT, value: 5}),
        onStoreResults: ()=> dispatch({type: actionTypes.STORED_RESULT}),
        onDeleteResult: (id)=> dispatch({type: actionTypes.DELETE_RESULT, resultId : id})
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);