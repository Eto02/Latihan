import React, { Component } from 'react';
// import { connect} from 'react-redux';
import './LifeCycleComp.css'
// import {RootContext} from '../Home/Home';
import {GlobalConsumer} from '../context/context'
class LifeCycleComp extends Component{
    constructor(props){
        super(props)
        this.state={
            count:1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props,satate){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount')
        // setTimeout(()=>{
        //     this.setState({
        //         count:2
        //     })
        // },5000)
      
    }
    shouldComponentUpdate(nexProps,nextState){
        console.group('shouldComponentUpdate')
        // console.log('nexProps',nexProps)
        console.log('nextState',nextState)
        console.groupEnd();
        return true;
    }
    getSnapshotBeforeUpdate(prevPorps,prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate(prevPorps,prevState,snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    changeCount=()=>{
        this.setState({
            count:this.state.count +1
        })
    }

    render(){
      
        return(
            <div>
                 <p>LifeCycle Component</p>
                 <hr/>
                <button className='btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr/>
                <p>Total Order:{this.props.state.totalOrder}</p>
             
                 
            </div>
       
        )
    }

}
// const mapStateToProps=state=>{
//     return{
//         order:state.totalOrder
//     }
// }
// export default connect(mapStateToProps) (LifeCycleComp);
export default GlobalConsumer(LifeCycleComp) ;