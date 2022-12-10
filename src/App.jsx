import { useState } from 'react'
import axios from 'axios'
import './App.css'
import { useEffect } from 'react'
import FormUser from './assets/components/FormUser'
import UserCard from './assets/components/UserCard'
import useCrud from './hooks/useCrud'

function App() {
 const {users, createNewUser, updateUserById, deleteUserById, getAllUsers} = useCrud()
 const [updateInfo, setUpdateInfo] = useState()

 useEffect(()=>{
   getAllUsers()
  },[])
  
  return (
    <div className="App">
      <h1>User</h1>
      <button>Open Form</button>
      <FormUser
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      />
      <div className='user-container'>
        {
          users?.map(user=>(
             <UserCard
             key={user.id}
             user={user}
             deleteUserById={deleteUserById}
             setUpdateInfo={setUpdateInfo}
              />
          ))
        }
       
      </div>
    </div>
  )
}

export default App
