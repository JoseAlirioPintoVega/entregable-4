import React from 'react'
import { useEffect } from 'react'
import { useForm} from 'react-hook-form'

const FormUser = ({createNewUser, updateInfo, updateUserById, setUpdateInfo}) => {

    const {register, reset, handleSubmit} = useForm()
    
    useEffect(()=>{
        reset(updateInfo)
    },[updateInfo])

    const submit = data =>{
        if(updateInfo){
            //Update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        }else{
            //Create
            createNewUser(data)
        }
        reset({
            email: "",
            last_name: "" ,
            first_name: "",
            birthdat: "",
            password: "",
        })
    }

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
        <h2>{updateInfo ? 'Update User' : 'Create Info'}</h2>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" id='email' {...register("email")}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id='password' {...register("password")}/>
        </div>
        <div>
            <label htmlFor="first_name">First Name</label>
            <input type="text" id='first_name'{...register("first_name")}/>
        </div>
        <div>
            <label htmlFor="last_name">Last Name</label>
            <input type="text" id='last_name'{...register("last_name")}/>
        </div>
        <div>
            <label htmlFor="birthday">Birthday</label>
            <input type="date" id='birthday' {...register("birthday")}/>
        </div>
        <button>Submit</button>
    </form>
  )
}

export default FormUser