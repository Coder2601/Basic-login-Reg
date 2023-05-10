import React, { useState } from 'react';
import '../styles/LoginReg.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  let nav = useNavigate();
  
  const [isLogin, setisLogin] = useState(false);
  const [userDetail, setUserDetails] = useState({
    username:'',
    password:''
  });


  const handleChange = (e) => {
    setUserDetails(userDetail=>({
        ...userDetail,
        [e.target.id]:e.target.value
    }));
  };

  const handleSubmit = async(event) => {
    const{username,password} = userDetail
    event.preventDefault();

    if(username && password){
      setisLogin(!isLogin);
      const result = await fetch('http://localhost:5050/login',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(userDetail)
      })
      
      console.log(await result.json());
      alert('Login Success!');
      nav('/')
    }
    else{
      alert('Login failed')
    }
  };

  return (
    <div className="container">
      <div className="logincard">
        <h2 className='h2Reg'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className='labelReg'>Username:</label>
            <input className='inputReg' type="text" id='username' onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label className='labelReg'>Password:</label>
            <input className='inputReg' type="password" id='password' onChange={handleChange} required />
          </div>
          <button className='buttonReg' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;