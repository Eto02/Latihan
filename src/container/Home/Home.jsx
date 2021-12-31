//library
import React,{Component, Fragment,createContext} from 'react';
import {BrowserRouter as Router,Route,Link, } from 'react-router-dom';
//pages
import BlogPost from '../BlogPost/BlogPost';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import YouTube from '../Youtube/YouTube';
import DetailPost from '../BlogPost/DeatailPost/DetailPost';
import Hooks from './../Hooks/Hooks';
//asset
import './Home.css'
import GlobalPorvider from '../context/context';

class Home extends Component{
  
    render(){

        return(
        <Router>
            <Fragment>
            <div className='navigation'>
                <Link to='/'>Blog Post</Link>
                <Link to='/product'>Product</Link>
                <Link to='/lifecycle'>LifeCycle</Link>
                <Link to='/youtube'>YouTube</Link>
                <Link to='hooks'>Hooks</Link>
            </div>
            <Route path='/' exact component={BlogPost}/>
            <Route path='/detail-post/:posId'  component={DetailPost}/>
            <Route path='/product' component={Product}/>
            <Route path='/lifecycle' component={LifeCycleComp}/>
            <Route path='/youtube' component={YouTube}/>
            <Route path='/hooks' component={Hooks}/>
            </Fragment>
           
        </Router>   
        )
    }
}
export default GlobalPorvider(Home);