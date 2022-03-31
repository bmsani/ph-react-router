import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend

    const navigate = useNavigate();

    const showFriendDetail = () => {
        const path = `/friends/${id}`
        navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <button  onClick={showFriendDetail}
            className='rounded bg-sky-300 text-white py-2 px-4'>{username}: id {id}
            </button>
        </div>
    );
};

export default Friend;