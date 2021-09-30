import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    
    const{id, title, body}=props.post
    const postStyle={
        border:'3px solid orange',
        borderRadius:'15px',
        padding:'15px',
        margin:'10px'
    }
    const history = useHistory()

    const handlePost = () => {
       history.push(`/post/${id}`)
    }
    
    return (
        <div style={postStyle}>
            <h1>Post Id:{id}</h1>
            <h3>Title:{title}</h3>
            <p>Post:{body}</p>

            <Link to={`/post/${id}`}>
            <button>See Post1</button></Link>
            <br /> <br />
            <button onClick={handlePost}>See Post2</button>
        </div>
    );
};

export default Post;