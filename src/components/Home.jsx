import React, { useState } from 'react'
const url = 'api.github.com/users'

const Home = () => {
    const [users, setUsers] = useState([])
    const getUsers = async() => {
        await fetch(url)
        .then(
            return 
        )
    }
  return (
    <div>Home</div>
  )
}

export default Home