// UsersForm.js
import React, { Component } from 'react';

class UsersForm extends Component {
  state = {
    name: '',
    email: '',
    gen: ''
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', this.state);
    this.props.handleAddUser(this.state);
    this.setState({ name: '', email: '', gen: '' });
  };

  render() {
    return (
      <div className='user-form'>
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={this.state.name} 
            onChange={this.handleInputChange} 
            required/><br/>
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.handleInputChange}  
            required/><br/>          
            <input 
            type="text" 
            name="gen" 
            placeholder="Generation" 
            value={this.state.gen} 
            onChange={this.handleInputChange}  
            required/><br/>   
          <button type="submit">Add User</button>
        </form>
      </div>
    );
  }
}

export default UsersForm;
