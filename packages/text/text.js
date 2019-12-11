import React from 'react';
import './text-style.css'

const Text = props => {
  return (
    <div className="ph-text">
      <h3>{props.children}</h3>
    </div>
  );
};

export default Text;
