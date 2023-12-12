import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import classes from "./SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { signinSuccess } from "../redux/userSlice";
export default function SignIn() {
  const auth = getAuth(app);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  //  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signinHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential) {
        dispatch(
          signinSuccess({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.mainform}>
      <form onSubmit={signinHandler} className={classes.formlist}>
        <div className={classes.list}>
          <label>Gmail</label>
          <input type="gmail" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={classes.list}>
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>signin</button>
      </form>
      <div>
        <p>Don&apos;t have an account?</p>
        <Link to={"/signup"}>signup</Link>
      </div>
    </div>
  );
}
