import React from 'react';
import Button from './button'

 const defaultButton = () => (
   <Button click={() => { console.log('Yo'); }} />
 ) 

 export default defaultButton;
