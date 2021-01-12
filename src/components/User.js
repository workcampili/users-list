import React from 'react';

function User({user}) {
   
    return (
        <div className = "user-item">
            <img src={user.picture.thumbnail} className ="avatar" alt="{user.name.last}" />
             {user.name.first} {user.name.last}
             {/* <button className ="delete">x</button> */}
        </div>
    );
}

export default User;