import React, { useEffect, useState } from 'react'
const url = 'https://api.github.com/users'

const Home = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async() => {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
        console.log(data);
    }
    useEffect(()=> {
        getUsers();
    }, [])
  return (
    <div>
      <h1>GitHub Users</h1>  
      <div className='cards'>
        {
            users.map((user)=> {
                const {login, avatar_url, id } = user;
                return (
                    <div key={id} className= 'card'>
                        <h3>{login}</h3>
                        <img src={avatar_url} alt="" width='100px'style={{borderRadius: '50%'}}/>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Home