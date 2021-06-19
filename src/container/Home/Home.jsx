import React,{Component} from 'react';
import BlogPost from '../BlogPost/BlogPost';
// import YouTubeComp from '../../components/YouTubeComp/YouTubeComp';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';

class Home extends Component{
    state={
        showComponent:true
    }
    componentDidMount(){

    }
    render(){
        return(
            <div>
                {/* <p>YouTube Componenet</p>
                <hr/>
                <YouTubeComp
                time='7.12'
                title='Tutorial React JS 1'
                desc='20x ditonton. 2 hari lalu'  />
                <YouTubeComp
                time='7.12'
                title='Tutorial React JS 2'
                desc='50 ditonton. 3 hari lalu' />
                <YouTubeComp
                time='7.12'
                title='Tutorial React JS 3'
                desc='100x ditonton. 5 hari lalu'/>
                <YouTubeComp
                time='7.12'
                title='Tutorial React JS 4'
                desc='120x ditonton. 7 hari lalu'/>
                <YouTubeComp/> */}
            {/* <p>Counter</p>
            <hr/>
            <Product/> */}
            {/* <p>LifeCycle Component</p>
            <hr/>
            {
                this,this.state.showComponent?
             <LifeCycleComp/>
             :null
            }
          */}
          <p>Blog Post</p>
          <hr/>
          <BlogPost/>
            </div>
  
            
        )
    }
}
export default Home;