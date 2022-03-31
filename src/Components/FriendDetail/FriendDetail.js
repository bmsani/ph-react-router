import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams()
    const [friend, setFriend] = useState({})

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <p className='text-xl font-bold mt-32 pb-10'>Hi Talking from FriendDetail <br /> {friendId}</p>
            <p className='text-2xl font-bold'>Name: {friend.name}</p>
            <p className="text-xl">Email: {friend.email} </p>
            <p className='text-xl'>Website:{friend.website}</p>
            <p className='my-2'>city: {friend.address?.city}</p>
            <p className='my-2'>lat: {friend.address?.geo?.city}</p>
        </div>
    );
};

export default FriendDetail;