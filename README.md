# Accordion React Component

This repository contains a lightweight and customizable accordion React component that allows you to create collapsible content sections with ease.

## Usage

Import the `Accordion` component from the repository into your React application. Pass in the `question` and `answer` props to configure the accordion content.

```jsx
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Accordion({ question, answer }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion-item">
      <div className="item-heading">
        <IconButton onClick={() => { setShow(!show) }}>
          {show ? <RemoveCircleIcon /> : <AddCircleIcon />}
        </IconButton>
        <h3>{question}</h3>
      </div>
      {show && <p>{answer}</p>}
    </div>
  )
}
```

## Props

- `question` (string): The question or title for the accordion item.
- `answer` (string): The answer or content of the accordion item.

## Styling

Feel free to customize the styling of the accordion component according to your project requirements.

## Contributing

Contributions, bug reports, and feature requests are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

This project was inspired by the need for a simple and customizable accordion component in React applications. Special thanks to the React and Material-UI communities for their contributions and support.

Enjoy using the Accordion React Component!
