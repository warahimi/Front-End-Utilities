import React from 'react'

const LoginForm3 = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-[#ced3d2] '>
      <div className='flex w-full max-w-6xl bg-white rounded-3xl shadow-2xl pl-5 p-6 sm:p-8'>
        <div className='w-full lg:w-1/2 pr-5'>
          <h1 className='text-5xl text-center font-semibold mb-3 mt-10'>Welcome Back</h1>
          <p className='text-gray-600 mb-16'>Welcome back! Please enter your details.</p>
          <div className='mb-5'>         {/**Inputs */}
            <label htmlFor="email" className='text-lg font-medium'>Email</label>
            <input type="email" id='email' name='email' placeholder='Enter your email' autoComplete='email'
            className='w-full border-2 border-gray-200 rounded-md py-3 shadow-sm mb-4 pl-2' />

            <label htmlFor="emai" className='text-lg font-medium'>Password</label>
            <input type="password" id='password' name='password' placeholder='Enter your password' autoComplete='current-password'
            className='w-full border-2 border-gray-200 rounded-md py-3 shadow-sm pl-2' />
          </div>
          <div className='flex items-center justify-between mb-10'>         {/**Inputs */}
            <div className='flex gap-2 items-center justify-center'>
                <input type="checkbox" id='remember' className='h-4 w-4' />
                <label htmlFor='remember' className='text-lg font-medium'>Remember me for days</label>
            </div>
            <button type='button' className='text-violet-500 text-lg font-medium'>Forgot Password</button>
          </div>
          <div className='flex flex-col w-full gap-4 mb-8'>
            <button type='submit' className='bg-black text-white py-4 rounded-xl text-lg font-medium c-animate'>Sign in</button>
            <button type='button' className='bg-black text-white py-4 rounded-xl text-lg font-medium c-animate flex justify-center items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
                Sign in with Google</button>
          </div>
          <div className='flex justify-center items-center gap-3'>
            <p className='text-lg font-medium text-gray-500'>Don't have and account? </p>
            <button className='text-lg font-medium text-violet-500 underline underline-offset-2'>Sign up for free</button>
          </div>
        </div>
        <div className='hidden lg:flex w-1/2'>
        <div className='relative'>
            <img src="./images/cover-image.jpg" alt="Cover Image" className='w-full h-full object-cover rounded-tr-2xl rounded-br-2xl' />
            <p className='absolute top-[80%] bg-white/10 text-white px-4 py-4 ml-7 mr-7 border-0 rounded-2xl  backdrop-blur-2xl text-center text-2xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur autem nulla dolorem ut vitae, 
                dignissimos consectetur.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm3
