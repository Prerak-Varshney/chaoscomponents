import { Button } from './index';
const app = () => {
  return (
    <div>
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
        onClick={() => console.log('Button clicked')}
      />
    </div>  
  )
}

export default app;