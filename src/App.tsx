import React from 'react';
import { Button, Input, Alert, Toast, ToolTip, Badge, AlertBox, Collapsible, Select } from '../lib';

const App = () => {

  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [selected, setSelected] = React.useState<string[]>([]);
  const [buttonClicked, setButtonClicked] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log(selected);
  }, [selected])

  return (
    <div className='flex items-center justify-center flex-col w-full h-[200vh] bg-black'>
      <div className='h-4' />

      <Input 
        type={"text"}
        placeholder={"Name"}
        value={name}
        setValue={setName}
        borderColor='#0af'
        outlineColor='#f00'
      />

      <div className='h-4' />

      <Input 
        type={"password"}
        placeholder={"Password"}
        buttonStyle='google'
        value={password}
        setValue={setPassword}
        borderColor='#0af'
        outlineColor='#f00'
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
            onClickOutside={() => {
              setButtonClicked((prev) => !prev);
            }}
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

      <Collapsible 
        label='Collapsible'
        // borderColor='#fff'
        // bgColor='transparent'
        textColor='#000'
        collapsibleLabel='This is collapsible content'
        collapsibleTextColor='#000'
        borderColor='#000'
        hoverBgColor='#111'
        hoverTextColor='#fff'
        // width='500px'
        // height='200px'
      />

      <div className='h-4' />

      <Collapsible 
        label='Collapsible'
        // borderColor='#fff'
        // bgColor='transparent'
        textColor='#000'
        collapsibleLabel='This is collapsible content'
        collapsibleTextColor='#000'
        borderColor='#000'
        hoverBgColor='#111'
        hoverTextColor='#fff'
        // width='500px'
        // height='200px'
      />

      <div className='h-4' />

      <Button 
        width='200px'
        height='40px'
        disabled={false}
        bgColor='#000'
        textColor='#fff'
        rounded={'sm'}
        hoverBgColor='#444'
        hoverTextColor='#fff'
        borderColor='#fff'
        onClick={() => {
          setButtonClicked((prev) => !prev);
        }}
        gap='40px'
      >
        <div className='w-10 h-full bg-red-500' />
        <div className='w-10 h-full bg-blue-500' />
        <div className='w-10 h-full bg-green-500' />
      </Button>

      <div className='h-4' />

      <Select 
        label='Select fruit'
        optionsList={['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry', 'Watermelon', 'Grapes', 'Kiwi', 'Papaya', 'Guava', 'Pomegranate', 'Jackfruit', 'Lemon', 'Lime', 'Lychee', 'Mandarin', 'Nectarine', 'Peach', 'Quince', 'Raspberry', 'Sapota', 'Tangerine', 'Ugli Fruit', 'Vinegar', 'Watermelon', 'Walnut', 'Yam', 'Zucchini khjas dkfjh kjsahdf kjhsa dkfjh skjdhf kjshad kfjh sakdjfh ksaljdhf kljsdh ']}
        selectedOptions={selected}
        setSelectedOptions={setSelected}
        type='multiple'
        rounded='sm'
        optionsSeperatorColor='#444'
      />

    </div>  
  )
}

export default App;