import './App.css'
import LoginForm from './components/LoginForm'

function App() {

  return (
    <div className='flex w-full h-screen custom-border'>
      <div className='w-full lg:w-1/2 flex items-center justify-center custom-border'> {/**Left Side - Login Form */}
        <LoginForm/>
      </div>
      <div className='hidden lg:flex w-1/2 justify-center items-center h-fulls relative bg-gray-200 custom-border'> {/**Left Side of screen */}
          <div className='animate-bounce'><div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin hover:animate-none'></div></div>
          <div className='w-full h-1/2 bg-white/10 backdrop-blur-lg absolute bottom-0'></div> {/**blue div with 10 opacity */}
      </div>
    </div>
  )
}

export default App
