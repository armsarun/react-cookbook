// let's go!
import React from 'react';
import {render} from 'react-dom';

import StorePicker from './components/storepicker'

render(<StorePicker/>, document.querySelector('#main'))

/* JSX can't return two element only return one. If you want to return
  it should be wrap inside div tag like above */
{/* JSX comments need to write like this*/}
