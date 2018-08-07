import React from 'react';
import {render} from 'react-dom';
import Header from './header';
import Inventory from './inventory';
import Order from './order';
import samplefishes from '../sample-fishes';
import Fish from './fish';


class App extends React.Component {
  constructor(){
    super()
    this.state={
      fishes:{},
      order:{}
    }
    this.addFish = this.addFish.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.localStorageAvialbility = this.localStorageAvialbility.bind(this)
  }

  // works before Component load and after state and props receive
  ComponentWillMount(){

  }

  /*works when state is updated to Component*/
  ComponentWillUpdate(){
    if(this.localStorageAvialbility){
      
    }
  }

  localStorageAvialbility(){
   return typeof(Storage) !== 'undefined' ? true : false
  }
  addFish(fish){
    const timestamp = Date.now();

    // console.log(fish)
    {/*Inline setState instead of taking state in seprate variable
      this give the currentstate value in variable and add concat the
      new fist to it*/}
      {/*
        Alternative wesbos way
        const fishes = {...this.state.fishes}

        fishes[`fish-${timestamp}`] = fish

        this.setState({fishes:fishes})

        */}
    this.setState((currentState)=>{
      return(

        currentState.friends.concat(currentState[`fish-${timestamp}`] = fish)
      )
    })
  }

  loadSamples(){
    this.setState({
      fishes:samplefishes
    })
  }
  /*
  *
   add Order to order state

   if it's new then add one either increase the count
  */
  addToOrder(key){

    this.setState((currentState)=>{
      const order = currentState.order
      return (
        order[key] = order[key] + 1 || 1
      )
    })
  }

  render(){
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {/* destruct fishes object and send each fish to fish Component*/}
            {
              Object
              .keys(this.state.fishes)
              .map(key => <Fish key={key} index = {key} addorder = {this.addToOrder} details = {this.state.fishes[key]}/>)
            }
          </ul>
        </div>
        <Inventory loadfish={this.loadSamples} addfish={this.addFish}/>
        <Order order={this.state.order} fishes={this.state.fishes}/>
      </div>
  )
  }
}

export default App;
