import { useState } from 'react';
import { Button, Input, Alert } from './index';

const App = () => {

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  return (
    <div>
      <div className='h-4' />

      <Input 
        type={"text"}
        placeholder={"Name"}
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
        buttonStyle='google'
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
        onClick={() => {
          setButtonClicked((prev) => !prev);
        }}
      />

      <div className='h-4' />

      {
        buttonClicked && 
          <Alert 
            alertType='black'
            alertHeading='Success'
            alertText='Button clicked successfully!'
            borderColor='#fff'
          />
      }

    </div>  
  )
}

export default App;