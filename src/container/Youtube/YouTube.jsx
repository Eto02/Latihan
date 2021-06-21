import React,{Component,Fragment} from 'react';
import YouTubeComp from './YouTubeComp/YouTubeComp';

class YouTube extends Component{
    render(){
        return( 
        <Fragment>
            <p>YouTube Componenet</p>
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
                <YouTubeComp/>
        </Fragment>
        )
    }
}
export default YouTube;