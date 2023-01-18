import './app.css';
import { useState } from 'react';
import {v4 as uuid} from 'uuid';

const Form = () => {
  
  const [userData,setUserData] = useState({})

  const handleInput = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setUserData({...userData,[name] :value, id : uuid()})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(userData);
    setUserData({fullName: "",email:"",subject:"",feed:""})
  }

  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor='Name'>Full Name</label>
          <input type='text' name='fullName' value={userData.fullName} required onChange={handleInput}/>
          <label htmlFor='Email'>Email</label>
          <input type='email' name='email' value={userData.email} required onChange={handleInput}/>
          <label htmlFor='Subject'>Subject</label>
          <input type='text' name='subject' value={userData.subject} required onChange={handleInput}/>
          <label htmlFor='Feedback'>Feedback</label>
          <textarea name='feed' value={userData.feed} required onChange={handleInput}/>
          <button type='submit'>Submit</button>
      </form>
  )
}

export default Form;
