import Get from './Get';
import Post from './Post';
import Put from './Put';
import Delete from './Delete';

const getNewsBlog=(data)=>Get(`posts`,false,data);
const getCommentBlog=()=>Get(`comments`,true);
//post
const postDataPost=(data)=>Post(`posts`,false,data);
//put
const putDataPost=(data)=>Put(`posts`,false,data);
//delete
const deleteDataPost=(data)=>Delete(`posts`,false,data);

const API={
    getNewsBlog,
    getCommentBlog,
    postDataPost,
    putDataPost,
    deleteDataPost

}
export default API;