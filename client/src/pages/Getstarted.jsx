import React, { useState } from 'react';
import './Getstarted.css'

function Getstarted() {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleMode = () => {
      setIsSignUp(!isSignUp);
    };

    const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
    });

    const handleInput= (e)=>{
      let name = e.target.name;
      let value = e.target.value;
      setUser({
       ...user,
       [name]: value,
      })
 }

  return (
    <div className='body relative bottom-[10vh]' >
      <div className='px-2  ' >

      </div>
      <div className='flex h-[100vh] w-[55%] items-center justify-start pl-8 pt-24'>
        <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
          <div className="form-container sign-up-container">
            {isSignUp && (
              <form className="sign">
                <h1 className="font-bold mb-2">Create Account</h1>

                <span className="text-[12px]">or use your email for registration</span>
                <input className="signInput" type="text" placeholder="Name"
                  name="userName"
                  value={user.username}
                  onChange={handleInput}
                />


                <input className="signInput" type="text" placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                  autoComplete='off' />

                <input className="signInput" type="text" placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                  autoComplete='off'
                />

                <button className='px-8 py-2 bg-blue-500 rounded-[25px] text-white'>Sign Up</button>
              </form>


            )}
          </div>
          <div className="form-container sign-in-container">
            {!isSignUp && (
              <form className="sign">
                <h1 className="font-bold m-0">Sign in</h1>

                <span className="text-[12px]">or use your account</span>
                < input className="signInput" type="email" placeholder="Email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />

                <input className="signInput" type="password" placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={user.password}
                />



                <button className='px-8 py-2 bg-blue-500 rounded-[25px] text-white mt-4'>Sign In</button>


              </form>
            )}
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className={`overlay-panel overlay-left ${isSignUp ? 'right-panel-active' : ''}`}>
                <h1 className="font-bold  p-2">Welcome Back!</h1>
                <p className="text-[14px] pb-2">To keep connected with us, please login with your personal info</p>
                <button className="ghost p-2" id="signIn" onClick={toggleMode}>
                  Sign In
                </button>
              </div>
              <div className={`overlay-panel overlay-right ${isSignUp ? '' : 'right-panel-active'}`}>
                <h1 className="font-bold  p-2">Hello, Friend!</h1>
                <p className="text-[14px] pb-2">Enter your personal details and start your journey with us</p>
                <button className="ghost p-2" id="signUp" onClick={toggleMode}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Getstarted
