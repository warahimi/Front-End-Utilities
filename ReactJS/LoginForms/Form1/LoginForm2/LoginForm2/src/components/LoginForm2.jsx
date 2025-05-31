import React from 'react'

const colors = {
    primary : "#060606",
    background : "#f5f5f5",
    disabled : "#D9D9D9"
}
const LoginForm2 = () => {
  return (
    <div className='w-full h-screen flex items-center custom-border'>
      <div className='hidden lg:flex flex-col relative w-1/2 h-full custom-border'> {/**Left side photo */}
      <div className='absolute top-[20%] left-[10%] flex flex-col'>
        <h1 className='text-4xl text-white font-bold mb-3'>Turn your idea into reality</h1>
        <p className='text-xl font-normal text-white'>Start for free and get attractive offers from the community.</p>
      </div>
        <img src="./images/cover_image.jpg" alt="Cover Image" className='h-full w-full object-cover' />
      </div>
      <div className='w-full lg:w-1/2 h-full bg-[#f5f5f5] flex flex-col justify-between items-center p-20'> {/** Right side login info */}
        <h1 className='text-xl text-[#060606] font-semibold'>Intractive Brand</h1>

        <div className='w-full flex flex-col custom-border'>   {/**Inputs section */}
            <div className='mb-5'>
                <h3 className='text-3xl font-semibold mb-3'>Login</h3>
                <p className='text-base mb-2'>Welcome back, please enter your details.</p>
            </div>
            <div className='w-full flex flex-col'>  {/**Email Password */}
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name='email' placeholder='Enter your email.' 
                className='w-full text-black border-b border-black outline-none focus:outline-none py-4 mb-3 bg-transparent'/>

                <label htmlFor="email">Password</label>
                <input type="password" id='password' name='password' placeholder='Enter your password.' 
                className='w-full text-black border-b border-black outline-none focus:outline-none py-4 mb-3 bg-transparent'/>
            </div>
            <div className='flex justify-between items-center w-full mb-4'> {/** Remember me Forgot Password */}
                <div className='flex items-center w-full gap-2'>
                    <input type="checkbox" className='w-4 h-4'/>
                    <p className='text-sm'>Remember me for 30 days</p>
                </div>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2 '>Forgot Password ?</p>
            </div>
            <div className='w-full flex flex-col'> {/**Buttons  */}
                <button className='w-full font-semibold bg-[#060606] mb-3 text-white rounded-md p-4 text-center flex items-center justify-center custom-btn-animation mt-5'>Log in</button>
                <button className='w-full font-semibold bg-white border-1 border-[#060606] mb-3 text-[#060606] rounded-md p-4 text-center flex items-center justify-center custom-btn-animation'>Register</button>
            </div>
            <div className='w-full flex justify-center items-center py-2 mb-3 relative'>
                <div className='w-full h-[1px] bg-black/40'></div>
                <p className='text-lg absolute text-black/80 bg-[#f5f5f5] ' > OR </p>
            </div>
            <div>
                
            <button className='w-full font-semibold bg-white border-1 border-[#060606] mb-3 text-[#060606] rounded-md p-4 text-center flex items-center justify-center gap-2 custom-btn-animation'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
                Sign in with Google
            </button>

            </div>
        </div>
        <div className='w-full flex justify-center items-center'> {/**Lower part */}
            <p className='text-sm font-normal text-[#060606]'>Don't have an account? <span className='font-semibold underline underline-offset-3 cursor-pointer text-violet-500'>Sign Up for free</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginForm2
