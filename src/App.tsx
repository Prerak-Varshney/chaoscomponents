import { useState } from 'react';
import { Button, Input } from './index';

const App = () => {

  const [name, setName] = useState<string>('');

  return (
    <div className='bg-black w-full h-screen'>
      <Button 
        label={"Submit"}
        // width='200px'
        // height='50px'
        disabled={false}
        bgColor='#f00'
        textColor='#fff'
        rounded={'sm'}
        hoverBgColor='#000'
        hoverTextColor='#fff'
        onClick={() => console.log(name)}
      />

      <div className='h-4' />

      <Input 
        type={"text"}
        title={"Name"}
        value={name}
        setValue={setName}
        borderColor='#f00'
        textColor='#fff'
        outlineColor='#f00'
      />
    </div>  
  )
}

export default App;