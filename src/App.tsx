import React from 'react'
import { Button, Input } from '../';

const App = () => {
  return (
    <div className='text-blue-500 bg-black w-full h-screen flex flex-col items-center justify-center gap-4'>
      Hello World
      <Button label='Click me' hoverBgColor='#09f' />
      <Input placeholder='Type here' buttonStyle='google' />
    </div>
  )
}

export default App