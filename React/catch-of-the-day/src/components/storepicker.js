import React from 'react';
// import single method from react dom
import {render} from 'react-dom'

class StorePicker extends React.Component {
  // each coponent require one render method
  render(){
    return (
      <div>
        <form action="" className="store-selector">
            <h2> Please Enter the a store</h2>
            <input type="text" required placeholder="Store Name"/>
            <button type="submit">Visit Store</button>
        </form>
      </div>
    )
  }
}

export default StorePicker;
