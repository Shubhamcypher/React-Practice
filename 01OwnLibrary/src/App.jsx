import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function add(){
    setCount(count+1)
  }

  function remove(){
    setCount(count-1)
  }

  return (
    <>
     <div className='flex justify-center '>
      <p className='text-blue-400'>Counter:{count}</p>
      <button onClick={remove} className='bg-red-500'>Remove</button>
      <button onClick={add} className='bg-green-500'>Add</button>
      <br/>
      <p>{count}</p>
     </div>
    </>
  )
}

export default App
