import React,{Component} from 'react';
// import YouTubeComp from '../../components/YouTubeComp/YouTubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
// import Product from '../Product/Product';

class Home extends Component{
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
            <p>LifeCycle Component</p>
            <hr/>
            <LifeCycleComp/>
            </div>
  
            
        )
    }
}
export default Home;