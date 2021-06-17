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
    }
    shouldComponentUpdate(nexProps,nextState){
        console.log('shouldComponentUpdate')
    }
    getSnapshotBeforeUpdate(prevPorps,prevState){
        console.log('getSnapshotBeforeUpdate')
    }
    componentDidUpdate(prevPorps,prevState,snapshot){
        console.log('componentDidUpdate')
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    render(){
        return(
            <button className='btn'>Component Button</button>
        )
    }

}
export default LifeCycleComp;