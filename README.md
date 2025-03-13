
# Button
The **Button** component is a customizable React button that supports various properties to modify its appearance and behavior. It can display a label or custom children, adjust its dimensions, colors, hover effects, border styles, and more.

## Features
- Customizable dimensions (width and height) and padding.
- Dynamic hover effects for background and text colors.
- Support for various border-radius options: `none`, `sm`, `md`, `lg`, and `full`.
- Option to disable the button.
- Ability to render custom child elements along with an optional label.

## Usage
```
import Button from './Button';

const App = () => {
  return (
    <div>
      <Button 
        label="Click Me"
        onClick={() => console.log("Button clicked!")}
        width="150px"
        height="50px"
        bgColor="#007BFF"
        textColor="#FFF"
        rounded="md"
        hoverBgColor="#0056b3"
        hoverTextColor="#FFF"
        borderColor="#007BFF"
        gap="8px"
      />
    </div>
  );
};

export default App;
```
## Props

| Prop            | Type                                        | Default         | Description                                                    |
|-----------------|---------------------------------------------|-----------------|----------------------------------------------------------------|
| `label`         | `string \| React.ReactNode`                 | -               | Text or element to display inside the button.                  |
| `width`         | `string`                                    | `auto`          | Width of the button.                                           |
| `height`        | `string`                                    | `auto`          | Height of the button.                                          |
| `disabled`      | `boolean`                                   | `false`         | Disables the button if set to true.                            |
| `onClick`       | `function`                                | -               | Function to be called on button click.                         |
| `bgColor`       | `string`                                    | `white`         | Background color of the button.                                |
| `textColor`     | `string`                                    | `black`         | Text color of the button.                                      |
| `rounded`       | `none \| sm \| md \| lg \| 'full'`    | `sm`            | Defines the border radius of the button.                       |
| `hoverBgColor`  | `string`                                    | `rgb(0, 150, 255)` | Background color on hover.                                   |
| `hoverTextColor`| `string`                                    | `white`         | Text color on hover.                                           |
| `borderColor`   | `string`                                    | `transparent`   | Border color of the button.                                    |
| `gap`           | `string`                                    | `0px`           | Gap between children elements inside the button.               |
| `children`      | `React.ReactNode`                           | -               | Additional elements to render inside the button (optional).    |