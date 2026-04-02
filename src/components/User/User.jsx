import React from 'react';
import { useLoaderData } from 'react-router';
import SingleUser from '../SingleUser/SingleUser';

const User = () => {

    const users = useLoaderData()
    console.log(users);
    
    return (
        <div className='user'>
            <h1>This is user</h1>

            {
                users.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
            }
        </div>
    );
};

export default User;