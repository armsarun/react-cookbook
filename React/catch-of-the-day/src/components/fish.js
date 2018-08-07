import React from 'react';
import {formatPrice} from '../helpers';
class Fish extends React.Component{
  render(){
    // destruct props into variable
    const {details, index}  = this.props
    {/* Find the available based on status and diable the button*/}
    const isAvailable = details.status === 'available';
    {/* Automatic ButtonText Text*/}
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
    return(
      <li className="menu-fish">
        <img src={details.image} alt={details.name}/>
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addorder(index)}>{buttonText}</button>
      </li>
    )
  }
}


export default Fish;
