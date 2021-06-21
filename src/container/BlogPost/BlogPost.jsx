
import React,{Component,Fragment} from 'react';
import Post from './Post/Post';
import './BlogPost.css'
import axios from 'axios';

class BlogPost extends Component{
    state={
        post:[],
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
        axios.get('http://localhost:3001/posts?_sort=id&_order=desc')
        .then((res)=>{
            // console.log(res.data)
            this.setState({
              post:res.data
            })
        })
    }
    postDataApi=()=>{
        axios.post(`http://localhost:3001/posts`,this.state.formBlogPost)
        .then((res)=>{
            console.log(res)
            this.getPostApi();
            this.resetState()
        },(err)=>{
            console.log(err)
            this.resetState()
        })
    }
    handleRemove=(data)=>{
        // console.log(data)
        axios.delete(`http://localhost:3001/posts/${data}`)
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
        axios.put(`http://localhost:3001/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
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
        console.log(e)
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
              
                {
                    this.state.post.map(post=>{
                        return   <Post 
                        key={post.id}
                        data={post}
                        remove={this.handleRemove}
                        update={this.handleUpdate}
                        />
                    })
                }
             
            </Fragment>
          
        )
        
    }
}

export default BlogPost;