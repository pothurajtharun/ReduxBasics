import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from "../../store/actions/index";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Stored Results</button>
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
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
}

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: ()=> dispatch(actionCreators.increment()),
        onDecrementCounter: ()=> dispatch(actionCreators.decrement()),
        onAddFiveCounter: ()=> dispatch(actionCreators.add(5)),
        onSubFiveCounter: ()=> dispatch(actionCreators.subtract(5)),
        onStoreResults: (result)=> dispatch(actionCreators.storedResult(result)),
        onDeleteResult: (id)=> dispatch(actionCreators.deleteResult(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);