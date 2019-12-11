import React from 'react';
import './button-style.css';

import Text from '../text/text'

const Button = (props) => {
  return (
    <div className="ph-button" onClick={props.click}>
      <Text> CLICK ME </Text>
    </div>
  )
}

export default Button;
