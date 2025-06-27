const useDisplayMessage = () => {
  const displayMessage = () => {
    console.log("This is a message from Custom Hook");
  }
  return [displayMessage];
}

export default useDisplayMessage