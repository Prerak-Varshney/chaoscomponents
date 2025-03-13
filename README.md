# Introduction
A library built over tailwindcss where you can customize your components as per your needs (not necessary except for colors and some basic props). With just one word change you can switch from normal to google's floating style.

**It's that simple!!!**

## Installation
Ensure you have `lucide-react` installed:
```
npm install lucide-react
npm i @prerak12/chaoscomponents@latest
```
# Input
A customizable React input component with support for various styles, password visibility toggle, and Google-style floating labels.

## Features
- Customizable width, height, colors, and border radius.
- Supports normal and Google-style floating labels.
- Password visibility toggle with Lucide icons.
- Fully controlled input with `value` and `setValue` props.
- Min and max length constraints.
- Disabled state support.

## Usage

### Import
```
import { Input } from '@prerak12/chaoscomponents';
import '@prerak12/chaoscomponents/styles';
```
The first line imports the input component.

The second line imports the styles for it.

Its necessary to import the styles to make the components look and work as they intend. 

### Example Usage
```
import { Input } from '@prerak12/chaoscomponents';
import '@prerak12/chaoscomponents/styles'; 
import { useState } from 'react';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    
    return (
        <Input 
            placeholder="Enter text"
            type="text"
            width="250px"
            height="50px"
            bgColor="#333"
            textColor="white"
            borderColor="blue"
            outlineColor="cyan"
            rounded="md"
            value={inputValue}
            setValue={setInputValue}
        />
    );
};

export default App;
```

### Password Toggle
If ```type="password"```, an eye icon will appear to toggle visibility.

## Props
| Prop          | Type                                               | Default                     | Description                                    |
|---------------|----------------------------------------------------|-----------------------------|------------------------------------------------|
| `placeholder` | `string`                                           | -                           | Placeholder text for the input                 |
| `type`        | `text \| password \| number`                                           | `text`                    | Input type (`text`, `password`, etc.)          |
| `width`       | `string`                                           | `200px`                   | Width of the input field                       |
| `height`      | `string`                                           | `40px`                    | Height of the input field                      |
| `bgColor`     | `string`                                           | `#000`                    | Background color of the input                  |
| `outlineColor`| `string`                                           | `rgb(0, 150, 255)`         | Color of the input when focused                |
| `textColor`   | `string`                                           | `white`                   | Text color of the input                        |
| `borderColor` | `string`                                           | `rgb(0, 150, 255)`         | Border color of the input                      |
| `rounded`     | `none \| sm \| md \| lg \| full` | `sm`         | Border radius size                             |
| `buttonStyle` | `google \| normal`                   | `normal`                  | Determines label positioning style             |
| `minLength`   | `number`                                           | `1`                         | Minimum length for input value                 |
| `maxLength`   | `number`                                           | -                           | Maximum length for input value                 |
| `value`       | `string`                                           | -                           | Current input value                            |
| `setValue`    | `function`                          | -                           | Function to update input value                 |
| `disabled`    | `boolean`                                          | `false`                     | Whether input is disabled                        |



# Select

A customizable React select dropdown component that supports both single and multiple selection modes. This component features dynamic search, keyboard navigation, and customizable styling for both the select box and its options.

## Features
- **Single & Multiple Selection:** Choose one or multiple options.
- **Keyboard Navigation:** Use arrow keys to navigate and type to search options.
- **Customizable Styles:** Easily adjust colors, dimensions, border styles, and more.
- **Dynamic Option Scrolling:** Automatically scrolls options into view on navigation.
- **Toggle Selection:** Optionally remove a selected item by clicking it again (in multiple selection mode).

## Usage
### Import
```
import { Select } from '@prerak12/chaoscomponents';
import '@prerak12/chaoscomponents/styles';
```

### Example Usage
```
import { Select } from '@prerak12/chaoscomponents';
import '@prerak12/chaoscomponents/styles'; 

const App = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  return (
    <div style={{ padding: "20px", backgroundColor: "#222" }}>
      <Select 
        label="Select fruit"
        optionsList={[
          'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Strawberry'
        ]}
        selectedOptions={selectedOptions}
        setSelectedOptions={setSelectedOptions}
        type="multiple"
        width="300px"
        height="40px"
        bgColor="#333"
        textColor="#fff"
        borderColor="#fff"
        hoverBgColor="#444"
        hoverTextColor="#fff"
        optionsBgColor="#000"
        optionsTextColor="#fff"
        selectedOptionsBgColor="#fff"
        selectedOptionsTextColor="#000"
      />
    </div>
  );
};

export default App;
```

## Props

| Prop                              | Type                                                | Default                     | Description                                                                          |
|-----------------------------------|-----------------------------------------------------|-----------------------------|--------------------------------------------------------------------------------------|
| `label`                           | `string`                                            | -                           | The default text to display on the select box.                                       |
| `width`                           | `string`                                            | `'200px'`                   | Width of the select box.                                                             |
| `height`                          | `string`                                            | `'40px'`                    | Height of the select box.                                                            |
| `bgColor`                         | `string`                                            | `'transparent'`             | Background color of the select box.                                                  |
| `textColor`                       | `string`                                            | `'white'`                   | Text color of the select box.                                                        |
| `rounded`                         | `none \| sm \| md \| lg \| full`           | `'none'`                    | Border radius style for the select box.                                              |
| `hoverBgColor`                    | `string`                                            | `'#444'`                    | Background color when hovering over the select box.                                  |
| `hoverTextColor`                  | `string`                                            | `'white'`                   | Text color when hovering over the select box.                                        |
| `borderColor`                     | `string`                                            | `'white'`                   | Border color of the select box.                                                      |
| `optionsBgColor`                  | `string`                                            | `'black'`                   | Background color of the dropdown options list.                                       |
| `optionsTextColor`                | `string`                                            | `'white'`                   | Text color for the options list.                                                     |
| `optionsHoverBgColor`             | `string`                                            | `'white'`                   | Background color for an option on hover.                                             |
| `optionsHoverTextColor`           | `string`                                            | `'black'`                   | Text color for an option on hover.                                                   |
| `optionsBorderColor`              | `string`                                            | `'transparent'`             | Border color for the options list.                                                   |
| `optionsSeperatorColor`           | `string`                                            | `'transparent'`             | Color for the separator between options.                                             |
| `maxOptionsHeight`                | `string`                                            | `'200px'`                   | Maximum height of the options list before scrolling.                                 |
| `optionHeight`                    | `string`                                            | `'40px'`                    | Height for each option item.                                                         |
| `optionsList`                     | `string[]`                                          | `[]`                        | Array of options to display in the dropdown.                                         |
| `selectedOptionsBgColor`          | `string`                                            | `'white'`                   | Background color for selected options.                                               |
| `selectedOptionsTextColor`        | `string`                                            | `'black'`                   | Text color for selected options.                                                     |
| `type`                            | `single \| multiple`                            | `'single'`                  | Selection mode: single or multiple.                                                  |
| `disabled`                        | `boolean`                                           | `false`                     | Disables the select box if true.                                                     |
| `opacity`                         | `number`                                            | `0.7`                       | Opacity level when the select box is disabled.                                       |
| `selectedOptions`                 | `string[]`                                          | -                           | Array of currently selected options.                                                 |
| `scrollbarColor`                  | `string`                                            | `'white'`                   | Color of the scrollbar in the options list.                                          |
| `set`                             | `boolean`                                           | `true`                      | Controls whether new selections are added (component-specific behavior).             |
| `removeFromSelectedOptionsAllowed`| `boolean`                                           | `true`                      | Allows removing a selected option when clicked again (in multiple mode).              |
| `setSelectedOptions`              | `function` | -               | Callback to update the selected options.                                             |


# Button
The **Button** component is a customizable React button that supports various properties to modify its appearance and behavior. It can display a label or custom children, adjust its dimensions, colors, hover effects, border styles, and more.

## Features
- Customizable dimensions (width and height) and padding.
- Dynamic hover effects for background and text colors.
- Support for various border-radius options: `none`, `sm`, `md`, `lg`, and `full`.
- Option to disable the button.
- Ability to render custom child elements along with an optional label.

## Usage
### Import
```
import { Button } from '@prerak12/chaoscomponents';
import '@prerak12/chaoscomponents/styles';
```

### Example Usage
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

