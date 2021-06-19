import React from 'react';

const Post =(props=>{
    return(
        <div className="post">
        <div className="img-thumb">
                <img src="http://placeimg.com/200/150/people" alt='dumy'/>
        </div>
        <div className="content">
            <p className='title'>{props.title}</p>
            <p className='desc'>{props.desc}</p>
            <button className='remove' onClick={props.remove}>Remove</button>
        </div>
    </div>
    )
})

export default Post;