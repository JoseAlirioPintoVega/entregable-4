import React from 'react'

const UserCard = ({user, deleteUserById, setUpdateInfo}) => {
    console.log(user)
    
    const handleEdit = () => {
        setUpdateInfo(user)
    }

  return (
   <article>
        <h3>{`Name: ${user.first_name}${user.last_name}` }</h3>
            <ul>
                <li>Correo {user.correo}</li>
                <li>Cumpleaños {user.birthday}</li>
            </ul> 
            <button onClick={()=>deleteUserById(user.id)}><i className="fa-solid fa-trash-can"></i></button>
            <button onClick={handleEdit}><i className="fa-solid fa-pen-to-square"></i></button>
   </article>
  )
}

export default UserCard