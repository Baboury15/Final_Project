import React, { Component } from 'react';
import FooterForm from './footerform';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A value was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text"/>
          Last Name:
          <input type="text"/>
          Email Address:
          <input type="text"/>
          Phone Number:
          <input type="text"/>
          Rate us:
          <select  >
            <option value="good">Good</option>
            <option value="bad">Bad</option>
          </select>
          Comment:
          <input type="text"  />

        </label>
        <input className ="submit" type="submit" value="Submit" />
      </form>

    );
  }
}

export default NameForm;
