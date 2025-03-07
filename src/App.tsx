import React from 'react'
import { Button, Input } from '../';

const App = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div className='text-blue-500 bg-black w-full h-screen flex flex-col items-center justify-center gap-4'>
      Hello World
      <Button label='Click me' hoverBgColor='#09f' />
      <Input placeholder='Type here' buttonStyle='google' value={value} setValue={setValue} />
    </div>
  )
}

export default App