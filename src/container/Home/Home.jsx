//library
import React,{Component, Fragment} from 'react';
import {BrowserRouter as Router,Route,Link, BrowserRouter} from 'react-router-dom';
//pages
import BlogPost from '../BlogPost/BlogPost';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import YouTube from '../Youtube/YouTube';
import DetailPost from '../BlogPost/DeatailPost/DetailPost';
//asset
import './Home.css'

class Home extends Component{
    state={
        showComponent:true
    }
    componentDidMount(){

    }
    render(){
        return(
        <Router>
           
            <Fragment>
            <div className='navigation'>
                <Link to='/'>Blog Post</Link>
                <Link to='/product'>Product</Link>
                <Link to='/lifecycle'>LifeCycle</Link>
                <Link to='/youtube'>YouTube</Link>
            </div>
            <Route path='/' exact component={BlogPost}/>
            <Route path='/detail-post/:posId'  component={DetailPost}/>
            <Route path='/product' component={Product}/>
            <Route path='/lifecycle' component={LifeCycleComp}/>
            <Route path='/youtube' component={YouTube}/>
            </Fragment>
            
        </Router>   
        )
    }
}
export default Home;