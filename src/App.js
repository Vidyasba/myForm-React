import { useState } from 'react';
import './App.css';

function App() {

  //States for input capturing value 
  const [email,setEmail]= useState('');
  const [password,setPassword]=useState('');
  const [cpassword,setCpassword]=useState('');

  //States for handling the input validations
  const [emailValid,setEmailValid]=useState(false);
  const [passwordValid,setPasswordValid]=useState(false);
  const [CpassowrdValid,setCpasswordValid]=useState(false);

  const handleEmailChange =(e) =>{
    const value=e.target.value;
    setEmail(value);
    setEmailValid(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value));
    }

  const handlePasswordChange=(e) =>{
    const value =e.target.value;
    setPassword(value);
    setPasswordValid(value.length>=8)
  }
  const handleConfirmPassword=(e)=>{
    const value=e.target.value;
    setCpassword(value);
    setCpasswordValid(value===password);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(emailValid && passwordValid && CpassowrdValid){
      alert('Form submitted successfully');
    }else{
      alert('cant submit the form');
    }
  }
  const clearForm=() =>{
  setEmail('');
  setPassword('');
  setCpassword('');
  setEmailValid(false);
  setPasswordValid(false);
  setCpasswordValid(false);
  }
  return (
    <div className="App-Container">
      <form class="form" onSubmit={handleSubmit}>

        <label htmlFor="email">Email:</label><br />
        <input 
        type="email" value={email} onChange={handleEmailChange}
        style={{borderColor:emailValid ?'green' : 'red'}} />
        {!emailValid && <p id="emailp">Please enter a valid email</p>}
        <br/>

        <label htmlFor="password">Password:</label><br />
        <input type="password" value={password} onChange={handlePasswordChange}
        style={{borderColor:passwordValid? 'green' :'red'}}
        ></input>
        {!passwordValid && <p id="emailp" >Password must be at least 8 characters long</p>}
        <br/>

        <label htmlFor="cpass">Confirm Password:</label><br />
        <input type="password"
        value={cpassword}
        onChange={handleConfirmPassword}
        style={{borderColor:CpassowrdValid ?'green':'red'}}></input>
        {!CpassowrdValid && <p  id="emailp" >Passwords do not match</p>}

        <br/><br/>
        <button id="signup" onClick={clearForm}>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
