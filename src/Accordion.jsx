import {React, useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Accordion({question, answer}) {
  const [show, setShow] = useState(false);
  return (
    <div className='accordion-item'>
      <div className='item-heading'>
        <IconButton onClick={ () => { setShow( !show ) } }>
          { show ? <RemoveCircleIcon/> : <AddCircleIcon />}
        </IconButton>
        <h3>{question}</h3>
      </div>
      { show && <p>{answer}</p>}
    </div>
  )
}
