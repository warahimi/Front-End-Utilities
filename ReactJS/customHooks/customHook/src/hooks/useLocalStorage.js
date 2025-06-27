import { useState } from "react"

const useLocalStorage = () => {
  const setUser = (user_name) => {
    localStorage.setItem("user", user_name)
  }
  const getUser = () => {
    const user = localStorage.getItem("user")
    return user
  }
  const [username, setUsername] = useState(() => getUser());

  return [username, setUser]
}
export default useLocalStorage