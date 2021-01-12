import React from 'react';
import User from './User';



function UsersList({users}) {

    
    console.log('usuarios',users);

    return (
        <div>

            <h1 className="text-center">Users List</h1>

            {users.map(user =>{
                return (
                    <User key = {user.id.value} user = {user}/>
                )
            })}
            
            
        </div>
    );
}

export default UsersList;