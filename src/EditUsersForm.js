// EditUsersForm.js
import React, { Component } from 'react';

class EditUsersForm extends Component {
  state = {
    name: this.props.user.name,
    email: this.props.user.email,
    gen: this.props.user.gen
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', this.state);
    // Pass updated user data to parent component
    this.props.handleEditUser({ id: this.props.user.id, ...this.state });
  };

  render() {
    return (
      <div className='edit-user-form'>
        <h2>Edit User</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} /><br/>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} /><br/>
          <input type="text" name="gen" placeholder="Generation" value={this.state.gen} onChange={this.handleInputChange} /><br/>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default EditUsersForm;
