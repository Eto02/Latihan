
import React,{Component,Fragment} from 'react';
import Post from '../../components/Post/Post';
import './BlogPost.css'
import axios from 'axios';

class BlogPost extends Component{
    state={
        post:[]
    }
    getPostApi =()=>{
        axios.get('http://localhost:3001/posts')
        .then((res)=>{
            // console.log(res.data)
            this.setState({
              post:res.data
            })
        })
    }
    handleRemove=(data)=>{
        console.log(data)
        axios.delete(`http://localhost:3001/posts/${data}`)
        .then((res)=>{
            this.getPostApi();
        })
    }
    
    componentDidMount(){
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post:json
        //     })
        // })
       this.getPostApi();
    }

    render(){
        return(
            <Fragment>
                <p className='section-title'>Blog Post</p>
                {
                    this.state.post.map(post=>{
                        return   <Post 
                        key={post.id}
                        data={post}
                        remove={this.handleRemove}
                        />
                    })
                }
             
            </Fragment>
          
        )
        
    }
}

export default BlogPost;