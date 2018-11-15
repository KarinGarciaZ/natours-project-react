import React from 'react';

const button = ( props ) => {
  return( 
    <a className={props.classes} href='#'>
      {props.text}
    </a>
  )
}

export default button;