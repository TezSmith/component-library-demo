import React from 'react';
import { storiesOf } from '@storybook/react';
import defaultButton from '../packages/button/button-demo'
import defaultText from '../packages/text/text-demo';


storiesOf('Button', module).add("default", defaultButton)
storiesOf('Text', module).add('default', defaultText);