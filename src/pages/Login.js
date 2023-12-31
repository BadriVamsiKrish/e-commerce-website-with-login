import { useState, useRef ,useContext} from 'react';
import { cartstore } from '../App';
import classes from './Authform.module.css';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const story=useNavigate();
  const emailInputRef=useRef();

  const passwordInputRef= useRef();
  const[cart,setCart,showcart,setShowcart,login,setLogin]=useContext(cartstore);
  const [isLogin, setIsLogin] = useState(true);

  const setLog = () => {
    setLogin(true);
    localStorage.setItem('login',true);
    redirectToAnotherRoute();
    setTimeout(()=>{setLogin(null);localStorage.removeItem('login')},30000);
  }

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const redirectToAnotherRoute = () => {
    story('/store');
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredEmail=emailInputRef.current.value;
    const enteredPassword=passwordInputRef.current.value;

    if(isLogin){
      var url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAKqFeOETMUmLT1WIt6gLvnW1aXBuI3J0g';

    }else{
      var url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAKqFeOETMUmLT1WIt6gLvnW1aXBuI3J0g';

    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email:enteredEmail,
          password:enteredPassword,
          returnSecuretocken:true,
        }),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then((res)=>{
        if(res.ok){
          setTimeout(setLogin(false),10000);
          return res.json();
        }
        else{
          return res.json().then((data)=>{
            let errorMessage='Authentication is failed';
            throw new Error(errorMessage);
          })
        }

  }).then(data=>{console.log(data);setLog()}
  )
  .catch(err=>{
    alert(err.message);
  });
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler} >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button onClick={submitHandler}>{isLogin ? 'Login' : 'Create an account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;