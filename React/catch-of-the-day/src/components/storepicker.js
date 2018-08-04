import React from 'react';
// import single method from react dom
import {render} from 'react-dom'
import '../css/style.css';
import {getFunName} from '../helpers.js';
import { Redirect } from 'react-router-dom';


class StorePicker extends React.Component {
  constructor(){
    super()
    this.goToStore = this.goToStore.bind(this)
  }
  goToStore(event){
    const storename = this.storeName.value;
    // console.log(`${storename}`);
    const url = `store/${storename}`;
    <Redirect to= {`store/${storename}`} />
    this.props.history.push(`store/:${storename}`)
  }

  // each coponent require one render method
  render(){
    return (
      <div>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
            <h2> Please Enter the a store</h2>
            {/*get the function from helper.js and gives the radom string*/}
            {/*get the input value using ref and pass to the submit function*/}

            <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input)=>{this.storeName = input}}/>
            <button type="submit">Visit Store</button>
        </form>
      </div>
    )
  }
}

// const {Provider, Consumer} = React.createContext(Router);


export default StorePicker;
