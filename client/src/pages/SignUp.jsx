import { useState } from 'react';
import { app } from '../firebase';
import classes from './SignIn.module.css'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom';

export default function SignUp() {

  const auth = getAuth(app)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const signupHandler = (e)=>{
    e.preventDefault()
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.mainform}>
      <form onSubmit={signupHandler} className={classes.formlist}>
      <div className={classes.list}>
        <label>Name</label>
        <input type="text" />
        </div>
        <div className={classes.list}>
        <label>Gmail</label>
        <input type="gmail" onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        <div className={classes.list}>
        <label>Password</label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
        </div>   
        <button>Signup</button>
      </form>
      <div>
        <p>Already have an account?</p>
        <Link to={'/signin'}>
        signup
        </Link>
      </div>
    </div>
  );
}
