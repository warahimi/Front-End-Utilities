import React, { useState } from 'react'


const RockPaperScessors = () => {
const choices = ['rock', 'paper', 'scissors'];
const [playerDisplay, setPlayerDisplay] = useState(''); 
const [computerDisplay, setComputerDisplay] = useState('');
const [resultDisplay, setResultDisplay] = useState('');
const [enteredName, setEnteredName] = useState('')
const [playerName, setPlayerName] = useState('');
const [totalTries, setTotalTries] = useState(0);
const [playerTotalWins, setPlayerTotalWins] = useState(0)
const [playerTotalLose, setPlayerTotalLose] = useState(0)
const rockImageUrl = "./images/rock.png";
const paperImageUrl = "./images/paper.png";
const scissorsImageUrl = "./images/scissors.png";
const [isDisabled, setIsDisabled] = useState(false)

const [totalTies, setTotalTies] = useState(0)

function playGame(playerChoice) 
{

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';
  setTotalTries(totalTries+1);
  setIsDisabled(true)
  if(computerChoice === playerChoice)
  {
    result = "IT IS A TIE"
    setTotalTies(totalTies + 1);
  }else{  // some one will win if both the choices do not match (since the choices did not match the coputer will either pick scissors or paper)
    switch(playerChoice)
    {
      case 'rock':
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!" // if use selected rock and computer selected scissors you win. else if the computer has selected paper and you lose. 
        break;
      case 'paper':
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!" // 
        break;
      case 'scissors':
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!" //  
        break;
    }
    if(result === "YOU WIN!")
    {
      setPlayerTotalWins(playerTotalWins + 1);
    }
    else{
      setPlayerTotalLose(playerTotalLose+1);
    }
  }

  enteredName != '' ? setPlayerName(enteredName):'';
  setEnteredName('')
  setPlayerDisplay(playerChoice);
  setComputerDisplay(computerChoice);
  setResultDisplay(result)

}
function endGame(){
  setEnteredName('');
  setPlayerName('');
  setTotalTies(0);
  setTotalTries(0);
  setPlayerTotalWins(0);
  setPlayerTotalLose(0);
  setResultDisplay('')
  setComputerDisplay('')
  setPlayerDisplay('')
  setIsDisabled(false)
}


  return (
    <div className='flex flex-col items-center justify-center  bg-white shadow-2xl p-3 lg:p-10 rounded-3xl'>
      <h1 className=' text-center text-3xl lg:text-5xl text-gray-600 mt-10'>Rock - Papper - Scissors</h1>
      <div className='flex flex-col lg:flex-row justify-center items-center gap-2 text-2xl lg:text-3xl text-gray-600 mt-10'>
        <label htmlFor="player">Player Name</label>
        <input type="text" id='player' placeholder='Enter your name' required disabled = {isDisabled} 
        className='border-2 border-gray-300 rounded-3xl p-3' value={enteredName} onChange={(e)=>{setEnteredName(e.target.value)}}/>
      </div>

      <div className='mb-8 mt-6 flex gap-2'>
        <button type='button' onClick={()=>{playGame('rock')}} className='btn'>Rock <img src={rockImageUrl} alt="" className='w-10 h-10' /></button>
        <button type='button' onClick={()=>{playGame('paper')}} className='btn'>Paper <img src={paperImageUrl} alt="" className='w-10 h-10' /></button>
        <button type='button' onClick={()=>{playGame('scissors')}} className='btn'>Scissors <img src={scissorsImageUrl} alt="" className='w-10 h-10' /></button>
      </div>

      <div className='text-2xl lg:text-3xl mb-4 flex gap-2'>
        You Picked: {playerDisplay} 
        {playerDisplay !=='' && (<img src={playerDisplay === "paper" ? paperImageUrl : (playerDisplay === "rock" ? rockImageUrl : scissorsImageUrl)} alt="" className='w-10 h-10' />)}
      </div>
      <div className='text-2xl lg:text-3xl mb-2 lg:mb-4 flex gap-2'>
        COMPUTER PICKED: {computerDisplay}
        {computerDisplay !== '' && (
          <img
            src={
              computerDisplay === "paper"
                ? paperImageUrl
                : computerDisplay === "rock"
                ? rockImageUrl
                : scissorsImageUrl
            }
            alt=""
            className="w-10 h-10"
          />
        )}
      </div>
      <div className='text-3xl lg:text-5xl mb-4 mt-2 lg:mt-3'>
        {playerName !== '' ? playerName +":  " + resultDisplay : playerName+ resultDisplay}
      </div>
      <div className='text-sm lg:text-lg mb-3 lg:mb-5'>
        <h1>Total Tries: {totalTries}</h1>
        <h1>Total Ties: {totalTies}</h1>
        <h1>Your Total Wins: {playerTotalWins}</h1>
        <h1>Your Total Loses: {playerTotalLose}</h1>
      </div>
      <button onClick={()=>{endGame()}} className='btn w-full'>End Game</button>
    </div>
  )
}

export default RockPaperScessors
