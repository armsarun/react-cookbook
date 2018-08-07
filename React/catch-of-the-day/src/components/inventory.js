import React from 'react';
import AddForm from './addform';

class Inventory extends React.Component {
  render(){
    return(
      <div>
      <h2>Inventory</h2>
      <AddForm addfish = {this.props.addfish}/>
      <button onClick={this.props.loadfish}>Load Sample Fish</button>
      </div>
    )
  }
}

export default Inventory;
