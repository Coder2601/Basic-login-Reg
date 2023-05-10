import React, { useState } from 'react';
import '../styles/LoginReg.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  let nav = useNavigate();

  const [isRegistered, setisRegistered] = useState(false);
  const [userDetail, setUserDetails] = useState({
    username:'',
    password:'',
    confirmPass:''
  });


  const handleChange = (e) => {
    setUserDetails(userDetail=>({
        ...userDetail,
        [e.target.id]:e.target.value
    }));
    console.log(userDetail);
  };

  const handleSubmit = async(event) => {
    const {username, password, confirmPass}=userDetail
    event.preventDefault();
    if(password === confirmPass){
      // const user={username, password}
      const result = await fetch('http://localhost:5050/register',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(userDetail)
      })

      console.log(await result.json());

      setisRegistered(!isRegistered);
      // alert('Registered Successfully!');
      
      nav('/login')
    }
    else{
      alert(`pass didn't match`)
    }

  };

  return (
    <div className="container">
      <div className="logincard">
        <h2 className='h2Reg'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className='labelReg'>Username:</label>
            <input id='username' className='inputReg' type="text" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label className='labelReg'>Password:</label>
            <input id='password' className='inputReg' type="password" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label className='labelReg'>Confirm Password:</label>
            <input id='confirmPass' className='inputReg' type="password" onChange={handleChange} required />
          </div>
          <button className='buttonReg' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
