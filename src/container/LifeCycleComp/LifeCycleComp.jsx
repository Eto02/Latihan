import React, { Component } from 'react';
import './LifeCycleComp.css'
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
        console.log('render')
        return(
            <div>
                 <p>LifeCycle Component</p>
                 <hr/>
                <button className='btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
            </div>
       
        )
    }

}
export default LifeCycleComp;