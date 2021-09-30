import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetails = () => {
    
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    const history = useHistory();
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[]);
    const friendStyles={
        border:'3px solid tomato',
        width:'400px',
        height:'3m start00px',
        padding:'10px auto',
        borderRadius:'10px',
        margin:'0px auto'
    }
    const handleClick = () =>{
        history.push('/friends')
     }
    return (
        <div>
            <h2>Friend Detail Comming Soon</h2>
            <div style={friendStyles}>
                <h1>ID:{friendId}</h1>
            <h2>This is single friend</h2>
            <h2>I am:{friend?.name}</h2>
            <h5>Call Me:{friend?.phone}</h5>
            <p>I live In:{friend?.address?.city}</p>
            <button onClick={handleClick}>See All Friends</button>
            
        </div>
        </div>
    );
};

export default FriendDetails;