import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userslice } from '../Redux/UserSlice';
import '../Styles/Login.scss'

export default function Login() {

  const [users, setUsers] = useState([]);
  const [name , setUsername] = useState();
  const [password , setPassword] = useState();

  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/users`).then((res)=>{setUsers(res.data)}).catch((err) => console.log(err));
  },[]);

const navigate = useNavigate()
const dispatch = useDispatch()

  const validateCredetials = ()=>{
    const user = users?.filter((r)=>{
      if(r.username === name){
        if(r.password === password){
          dispatch(userslice.actions.getUserDetails(r))
          navigate('/home')
          return r
        }
      }
    })
    if(user.length === 0){
      document.querySelector('.invalid').innerHTML = 'Invalid Username or Password'
    }
    emptyText()
  }

  const emptyText = ()=>{
    document.querySelector('.textfield1').value = ''
    document.querySelector('.textfield2').value = ''
  }

  return (
    <>
    <div className='Login'>
     <div className='addInfo'> 
      <input type='text' placeholder='Enter Username' className='textfield1'  onChange={(e)=>setUsername(e.target.value)}></input>
      <input type='password' placeholder='Enter Password' className='textfield2' onChange={(e)=>setPassword(e.target.value.toString())}></input>
      <p className='invalid'></p>
     </div> 
     <div className='validateInfo'>
      <button onClick={()=>validateCredetials()}>Login</button>
     </div>
    </div>

    
    
    </>
  )
}
