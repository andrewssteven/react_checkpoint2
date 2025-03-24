import React from 'react'
import Image from './components/Image'
import Name from './components/Name'
import Description from './components/Description'
import Price from './components/Price'

const App = () => {


  return (
    <div>
      <div className='flex items-center flex-col'>
      <div className='shadow-2xl rounded-2xl w-80 p-4 space-y-2 mt-4'>
        <Image/>
        <Name/>
        <Description/>
        <Price/>
      </div>
      <p>Hello <span>there!!</span></p>
      </div>
    </div>
  )
}

export default App