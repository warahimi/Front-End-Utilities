import React, { useState } from 'react'

const Login4 = () => {
    const [isLoginMode, setIsLoginMode] = useState(false);
   
  return (
    
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
      {/* Header Title */}
      <div className='flex justify-center mb-8'>
        <h2 className='text-3xl font-bold text-center'>{isLoginMode ? 'Loged In' : 'Not Loged In'}</h2>
      </div>

      {/**Tab Controls */}
      <div className='relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden opacity-80 hover:opacity-100 transition'>
        <button type='button' aria-label='Login Tab' onClick={()=>{setIsLoginMode(true)}} className={`w-1/2 text-lg font-medium transition-all z-10 ${isLoginMode? "text-white" : "text-black"}`}>Login</button>
        <button type='button' onClick={()=>{setIsLoginMode(false)}} className={`w-1/2 text-lg font-medium transition-all z-10 ${!isLoginMode? "text-white" : "text-black"}`}>Sign up</button>
        <div className={`absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 ${isLoginMode ? "left-0" : "left-1/2"}`}> {/**Sliding tab */}
        </div>
      </div>

      {/**Form Section */}
      <form action="" onSubmit={(e) => e.preventDefault()} className='space-y-5'>
        { !isLoginMode && (<input type='text' placeholder='Name' required className='w-full p-3 border-b-2 border-gray-200 outline-none focus:border-cyan-500 placeholder-gray-400'/>)}

        {/**Shared input fields */}
        <input type="email" placeholder='Email' required autoComplete='email'  className='w-full p-3 border-b-2 border-gray-200 outline-none focus:border-cyan-500 placeholder-gray-400'/>
        <input type="password" placeholder='password' required autoComplete='current-password' className='w-full p-3 border-b-2 border-gray-200 outline-none focus:border-cyan-500 placeholder-gray-400'/>

        {/**Sig up button */}
        {!isLoginMode && (<input type='password' placeholder='Confirm password' required className='w-full p-3 border-b-2 border-gray-200 outline-none focus:border-cyan-500 placeholder-gray-400'/>)}

        {/**Forget password for login */}
        {isLoginMode &&
             (<div className='text-right'>
                <p className='text-cyan-600 hover:underline hover:underline-offset-3'>Forgot Password</p>
              </div>)}

        {/**Shared button */}
        <button type='submit' className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-200 rounded-full text-white text-lg font-medium opacity-80 hover:opacity-100 transition'>{isLoginMode ? 'Login' : 'Sign Up'}</button>

        {/**Switch link */}
        
        <p className='text-center text-gray-600 text-lg p-3'>{isLoginMode ? 'Dont have an account?' : 'Already have an account'}</p>
        <div className='flex items-center justify-center p-4'>
            <a href="#" className='text-cyan-600 hover:underline hover:underline-offset-2' onClick={()=>{setIsLoginMode(!isLoginMode)}}>{isLoginMode ? 'Sign Up now' : 'Log in'}</a>
        </div>
      </form>
    </div>
  )
}

export default Login4
