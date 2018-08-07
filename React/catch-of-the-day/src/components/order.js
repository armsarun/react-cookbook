import React from 'react'
import {formatPrice} from '../helpers';

class Order extends React.Component {
  constructor(){
    super()
    this.renderOrder = this.renderOrder.bind(this)
  }

  renderOrder(key){
      const fish = this.props.fishes[key]
      const count = this.props.order[key]
      if(!fish || fish.status === 'unavailable'){
          return <li key={key}>Sorry, {fish ? fish.name : 'fish'} is no longer available</li>
      }

      return (
        <li key={key}>
          <span>
            {count}lbs {fish.name}
          </span>
          <span className="price">{formatPrice(count * fish.price)}</span>
        </li>
      )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    /**
    * return total value
    * Add values to prevTotal and return interval
    * Initially it is 0 that is mention in end
    * of the function
    * if fish is available then add value to prevtotal with price value
    **/
    const total = orderIds.reduce((prevTotal, key)=>{
      // get the fish details from fish state
      const fish = this.props.fishes[key];
      // get the order count from fish state
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if(isAvailable){
        return prevTotal + (count * fish.price || 0)
      }
      return prevTotal
    }, 0);
    return(
        <div className="order-wrap">
            <h2>Orders</h2>
            <ul className="order">
              {/* render function instead of Component*/}
              {orderIds.map(this.renderOrder)}
                <li className="total">
                    <strong>Total:</strong>
                    {formatPrice(total)}
                </li>
            </ul>
        </div>
    )
  }
}

export default Order;
