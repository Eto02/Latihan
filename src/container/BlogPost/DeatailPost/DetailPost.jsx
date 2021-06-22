import { render } from '@testing-library/react';
import axios from 'axios';
import React, { Component } from 'react';
import './DeatailPost.css'

class DetailPost extends Component{
    state={
        post:{
            title:'',
            body:''
        }
    }


    componentDidMount(){
        let id=this.props.match.params.posId
        axios.get(`http://localhost:3001/posts/${id}`)
        .then((res)=>{
            console.log('res',res)
            this.setState({
                post:{
                    title:res.data.title,
                    body:res.data.body
                }
            })
        },(err)=>{
            console.log('err',err)
        })
    }

    render(){
        return(
            <div className="p-detail-post">
                <p className='detail-title'>{this.state.post.title}</p>
                <p className='detail-body'>{this.state.post.title}</p>
            </div>
        )
    }
}

export default DetailPost;