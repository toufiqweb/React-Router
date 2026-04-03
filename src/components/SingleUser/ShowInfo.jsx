import React, { use } from 'react';

const ShowInfo = ({userPromise}) => {

    const {username , name} = use(userPromise)

    return (
        <div>
            <p><small>{username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default ShowInfo;