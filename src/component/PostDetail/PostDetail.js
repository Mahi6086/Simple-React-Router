import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const PostDetail = () => {
    /* use react useParams() */
    const {postId} = useParams();
    
    const [post, setPost] = useState({})
       /* use Destructuring */
    const{body}= post;
    /* use UseHistory() */
    const history = useHistory()
    useEffect(() => {
       const url = `https://jsonplaceholder.typicode.com/posts/${postId}`
       fetch(url)
       .then(res => res.json())
       .then(data => setPost(data))
    },[])

    const postStyles={
        border:'3px solid orange',
        borderRadius:'15px',
        padding:'15px',
        margin:'20px auto',
        width:'300px'
    }
   
    const handleClick = () => {
        history.push('/Posts')
    }
    return (
        <div style={postStyles}>
            <h1>Post Detail: {postId}</h1>
            <p>Post:{body}</p>
            <button onClick={handleClick}>See Post Detail</button>
        </div>
    );
};

export default PostDetail;