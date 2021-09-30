import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const{name,address,phone, id}=props.friend
    const history = useHistory()
    const friendStyle={
        border:'3px solid tomato',
        padding:'10px',
        borderRadius:'10px'
    }
    const url=`/friend/${id}`
    const handleClick = () =>{
       history.push(`/friend/${id}`)
    }
    return (
        <div style={friendStyle}>
            <h2>This is single friend</h2>
            <h2>I am:{name} {id}</h2>
            <h5>Call Me:{phone}</h5>
            <p>I live In:{address.city}</p>
            <Link to={url}>Visit me</Link>
            <br />
            {/* System-01 */}
            <Link to={url}>
            <button>Visit Me</button>
            </Link>
            <br />
            {/* System-02 */}
            <button onClick={handleClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;