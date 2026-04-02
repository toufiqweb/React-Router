import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {

    const users = useLoaderData()
    console.log(users);
    
    return (
        <div className='user'>
            <h1>This is user</h1>
        </div>
    );
};

export default User;