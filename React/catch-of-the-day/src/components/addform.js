import React from 'react'

class AddForm extends React.Component {

  createFish(event){
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value
    }
    this.props.addfish(fish);
    this.form.reset()
  }

  render(){

    return(
      <form className="fish-edit" ref={(input)=>this.form=input}onSubmit={(e)=>this.createFish(e)}>
       <input type="text" placeholder="Fish Name" ref={(input)=>this.name=input}/>
       <input type="number" placeholder="Fish price" ref={(input)=>this.price=input}/>
       <select name="" id="" ref={(input)=>this.status=input}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
       </select>
       <textarea placeholder="Fish Desc" ref={(input)=>this.desc=input}></textarea>
       <input type="text" placeholder="fish image" ref={(input)=>this.image=input}/>
       <button  type="submit">+ Add Item</button>
      </form>

    )
  }
}

export default AddForm;
