import { render } from '@testing-library/react';
import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';

class Counter extends Component{

   

    // handleCounterChange = (newValue) =>{
    //     this.props.onCountChange(newValue)
    // }

    // handlePlus = ()=>{
    //   this.setState({
    //       order:this.state.order +1
    //   },()=>{
    //     this.handleCounterChange(this.state.order)
    //   })
    
    // }

    // hendleMinus=()=>{
    //     if (this.state.order>0) {
    //         this.setState({
    //             order:this.state.order -1
    //         },()=>{
    //             this.handleCounterChange(this.state.order)
    //         })
    //     }
       
    // }

    render(){

        return(
            <Fragment>
                <div className="container">
                    <button className='minus' onClick={this.props.hendleMinus}>-</button>
                    <input type="text" name="" id="" value={this.props.order}/>
                    <button className='plus' onClick={this.props.hendlePlus}>+</button>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        order:state.totalOrder
    }
}
const mapDispatchToPorps=(dispatch)=>{
    return{
        hendlePlus:()=>dispatch({type:ActionType.PLUS_ORDER}),
        hendleMinus:()=>dispatch({type:ActionType.MINUS_ORDER}),
    }
}

export default connect(mapStateToProps,mapDispatchToPorps)(Counter) ;