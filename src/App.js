import './App.css';
import Details from './Details';
import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pincode: "",
      detailsvisible: false
    }
    this.submitHandler = this.submitHandler.bind(this)
  }

  submitHandler = (event) => {
    this.setState({
      detailsvisible: true
    })
    event.preventDefault(); 
  }
  onChangeHandler = (event) => {
    this.setState({
      pincode: event.target.value,
      detailsvisible: false
    })
  }

  render() {
    let conditional;
    if (this.state.detailsvisible) {
      conditional = <Details pin={this.state.pincode}></Details>;
    } else {
      conditional = '';
    }
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type="text" value={this.state.pincode} onChange={this.onChangeHandler} />
          <button type="submit">Submit</button>
          {conditional}
        </form>
      </div>
    )
  }
}

export default App
