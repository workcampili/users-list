import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UsersList from '../components/UsersList';

function HomePage() {

    const [users, setUsers] = useState([])

    useEffect(() => {
      axios
        .get("https://randomuser.me/api/?results=50")
        .then(response => {
          
          
          setUsers(response.data.results.filter((user)=>{
            return user.id.value !== null
          }))
        });
    }, []);

    return (
        <div>
            <UsersList users={users}/>
        </div>
    );
}

export default HomePage;