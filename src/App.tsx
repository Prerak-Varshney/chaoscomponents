import { useState } from 'react';
import { Button, Input } from './index';

const App = () => {

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <div>
      <div className='h-4' />

      <Input 
        type={"text"}
        placeholder={"Name"}
        // buttonStyle='normal'
        value={name}
        setValue={setName}
        borderColor='#0af'
        textColor='#fff'
        outlineColor='#f00'
        bgColor='#000'
      />

      <div className='h-4' />

      <Input 
        type={"password"}
        placeholder={"Password"}
        buttonStyle='normal'
        value={password}
        setValue={setPassword}
        borderColor='#0af'
        textColor='#fff'
        outlineColor='#f00'
        bgColor='#000'
      />

      <div className='h-4' />

      <Button 
        label={"Submit"}
        width='200px'
        height='40px'
        disabled={false}
        bgColor='#f00'
        textColor='#fff'
        rounded={'sm'}
        hoverBgColor='#f40'
        hoverTextColor='#fff'
        borderColor='#fff'
        onClick={() => console.log(name)}
      />
    </div>  
  )
}

export default App;