import React from 'react'

const LoginForm = () => {
  return (
    <div className= 'bg-white px-10 py-20 rounded-2xl border-2 border-gray-200 shadow-2xl'>
        <h1 className='text-5xl font-semibold mb-8'>Welcome Back!</h1>
        <p className='text-lg font-medium text-gray-500 mb-5 text-center'>Please enter your details.</p>
        <div>                           {/**Inputs container */}
            <label htmlFor="email" className='text-base font-medium'>Email</label>
            <input type="email" id='email' name='email' placeholder='Enter your email' 
            className='w-full border-2 border-gray-200 p-4 rounded-xl mt-1 mb-2 bg-transparent'/>
            <label htmlFor="password" className='font-medium text-base'>Password</label>
            <input type="password" id='password' name='password' placeholder='Enter your epassword' 
            className='w-full border-2 border-gray-200 p-4 rounded-xl mt-1 mb-2 bg-transparent mb-4'/>
        </div>
        <div className='flex justify-between items-center mb-14'>                           {/**Forgto button and remember me checkbox */}
            <div>
                <input type="checkbox" id='rememberme' name='rememberme' />
                <label htmlFor="rememberme" className='ml-2 font-medium text-base'>Remember me for 30 days.</label>
            </div>
            <button className='text-base font-medium text-violet-500'>Forgot Password</button>
        </div>
        <div className='flex flex-col justify-center items-center gap-y-4 mb-8'>                           {/**Sign in and Sign up  */}
            <button className='bg-violet-500 text-white text-lg font-bold py-4 w-full rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all ease-in-out'>Sign in</button>
            <button className='flex gap-1 justify-center items-center text-violet-500 text-lg font-medium border-2 border-gray-200 w-full rounded-xl py-3 hover:scale-[1.02] active:scale-[0.98] transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
                Sign with Google</button>
        </div>
        <div className='flex items-center justify-center text-base font-medium'>                           {/**Don't have an account */}
            <p>Don't have an account?</p>
            <button className='text-violet-500 ml-2'>Sign up</button>
        </div>
    </div>
  )
}

export default LoginForm
