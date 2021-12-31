import { render } from '@testing-library/react';
import React, { Component, Fragment } from 'react';
// import {connect} from 'react-redux';
// import ActionType from '../../../redux/globalActionType';
// import {RootContext} from '../../Home/Home'
import {GlobalConsumer} from '../../context/context'

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
        console.log(this.props.state.totalOrder)
        return(
        
            <div className="container">
                <button className='minus' onClick={()=>this.props.dispatch({type:'MINUS_ORDER'})}>-</button>
                <input type="text" name="" id="" value={this.props.state.totalOrder}/>
                <button className='plus' onClick={()=>this.props.dispatch({type:'PLUS_ORDER'})}>+</button>
            </div>
        )
    }
}
// const mapStateToProps=(state)=>{
//     return{
//         order:state.totalOrder
//     }
// }
// const mapDispatchToPorps=(dispatch)=>{
//     return{
//         hendlePlus:()=>dispatch({type:ActionType.PLUS_ORDER}),
//         hendleMinus:()=>dispatch({type:ActionType.MINUS_ORDER}),
//     }
// }

// export default connect(mapStateToProps,mapDispatchToPorps)(Counter) ;
export default GlobalConsumer(Counter)  ;