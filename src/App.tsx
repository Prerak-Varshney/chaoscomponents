import { useState } from 'react';
import { Button, Input, Alert, Toast, ToolTip, Badge, AlertBox } from '../';

const App = () => {

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  return (
    <div className='flex items-center justify-center flex-col'>
      <span className='text-blue-500 font-bold'>Hello World</span>
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

      <Badge
        label='Badge'
        // width='200px'
        // height='40px'
      />

      <div className='h-4' />
      
      <div className='w-full flex justify-center items-center gap-4'>
      <ToolTip 
        label='ToolTip'
        toolTipLabel='This is a tip !!!'
        toolTipPosition='right'
        toolTipBgColor='#222'
        toolTipTextColor='#fff'
        // width='200px'
        // height='40px'
      />
      <ToolTip 
        label='ToolTip 2'
        toolTipLabel='This is a tip !!!'
        toolTipPosition='top'
        toolTipBgColor='#222'
        toolTipTextColor='#fff'
        // width='200px'
        // height='40px'
      />
      </div>
  
      {
        buttonClicked && 
          // <Alert 
          //   alertType='black'
          //   alertHeading='Success'
          //   alertText='Button clicked successfully!'
          //   borderColor='#fff'
          //   rounded='full'
          // />

          // <Toast 
          //   toastHeading='Success'
          //   toastText = 'This is a very long text'
          // >
          // </Toast>
          <AlertBox 
            label='This is an alert dialog box!!!'
            borderColor='#fff'
            bgColor='transparent'
            // width='500px'
            // height='200px'
          >
            <div className='w-full flex justify-center items-center gap-4'>
              <Button  
                label={"Save"}
                // width='100px'
                // height='40px'
                disabled={false}
                bgColor='#08f'
                textColor='#fff'
                rounded={'sm'}
                hoverBgColor='#09f'
                hoverTextColor='#fff'
                borderColor='#fff'
                onClick={() => {
                  setButtonClicked((prev) => !prev);
                }}
              />

              <Button 
                label={"Close"}
                // width='100px'
                // height='40px'
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
            </div>

          </AlertBox>
      }

    </div>  
  )
}

export default App;