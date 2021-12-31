
import React,{Component,Fragment} from 'react';
import Post from './Post/Post';
import './BlogPost.css'
import axios from 'axios';
import API from '../../services';

class BlogPost extends Component{
    state={
        post:[],
        comment:[],
        formBlogPost:{
            userId: 1,
            id:'',
            title: "",
            body:''
        },
        isUpdate:false,
    }
    resetState=()=>{
        this.setState({
            formBlogPost:{
                userId: 1,
                id:'',
                title: "",
                body:''
            },
        })
    }
    getPostApi =()=>{
       let data={
            _sort:'id',
            _order:'desc',
        };
        API.getNewsBlog(data)
        .then(res=>{
            this.setState({
                post:res
            })
        })
        API.getCommentBlog()
        .then(res=>{
            this.setState({
                comment:res
            })
        })
      
    }
    postDataApi=()=>{
    
        API.postDataPost(this.state.formBlogPost)
        .then((res)=>{
            this.getPostApi();
            this.resetState();
            console.log('succes',res)
        },(err)=>{
            this.resetState();
            console.log(err)
        })
    }
      
    handleRemove=(data)=>{
        console.log(data)
        API.deleteDataPost(data)
        .then((res)=>{
            this.getPostApi();
        })
    }
    handleFormChange =(e)=>{

        let formBlogPostNew={...this.state.formBlogPost};
        let timestamp=new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id']=timestamp;
        }
        formBlogPostNew[e.target.name]= e.target.value;
        this.setState({
            formBlogPost:formBlogPostNew
        })
    }

    
    putDataToApi=()=>{
        let data=this.state.formBlogPost;
        data.id=this.state.formBlogPost.id;
        API.PutDataPost(data)
        .then((res)=>{
            console.log(res)
            this.getPostApi();
            this.resetState()
        },(err)=>{
            console.log(err)
            this.resetState()
        })
    }
    handleSubmit=()=>{
        if (this.state.isUpdate) {
            this.putDataToApi();
            this.setState({
                isUpdate:false
            })
        }else{
            this.postDataApi();
        }
      
       
    }
    handleUpdate =(e)=>{
       
        this.setState({
            formBlogPost:e,
            isUpdate:true
        })
    
    }
    handeCencel=()=>{
        this.setState({
            isUpdate:false
        })
        this.resetState();
        
    }
    handleDetail=(e)=>{
        // console.log(e)
        this.props.history.push(`/detail-post/${e}`)
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
                <hr/>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name='title' placeholder='add title' onChange={this.handleFormChange}/>
                    <label htmlFor="body">Blog Conttent</label>
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder='add body'  onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>Simpan</button>
                  {
                      this.state.isUpdate?<button className='btn-submit' onClick={this.handeCencel}>Batal</button> :null
                  }
                </div>
                {/* {
                    this.state.comment.map(comment=>{
                    return <p>{comment.name }-{comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post=>{
                        return   <Post 
                        key={post.id}
                        data={post}
                        remove={this.handleRemove}
                        update={this.handleUpdate}
                        goDetail={this.handleDetail}
                        />
                    })
                }
             
            </Fragment>
          
        )
        
    }
}

export default BlogPost;