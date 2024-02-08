// App.js
import React from 'react';
import Users from './Users';
import UsersForm from './UsersForm';
import EditUsersForm from './EditUsersForm';
import './App.css';

class App extends React.Component {
  state = {
    users: [
      { id: 1, name: 'Precious', email: 'precious@yahoo.com', gen: 11 },
      { id: 2, name: 'Adwoa', email: 'adwoa@example.com', gen: 2 },
    ],
    editingUserId: null // To track which user is being edited
  };

  handleAddUser = (user) => {
    this.setState({ users: [...this.state.users, { ...user, id: Date.now() }] });
  };

  handleDeleteUser = (id) => {
    this.setState({ users: this.state.users.filter(user => user.id !== id) });
  };

  handleEditUser = (updatedUser) => {
    this.setState({
      users: this.state.users.map(user => user.id === updatedUser.id ? updatedUser : user),
      editingUserId: null // Reset editing state
    });
  };

  handleEdit = (id) => {
    this.setState({ editingUserId: id });
  };

  render() {
    const { users, editingUserId } = this.state;
    return (
      <div className="App">
        <Users users={users} handleDeleteUser={this.handleDeleteUser} handleEdit={this.handleEdit} required/>
        <div className='flex'>
        <UsersForm handleAddUser={this.handleAddUser} required/>
        {editingUserId && (
          <EditUsersForm
            user={users.find(user => user.id === editingUserId)}
            handleEditUser={this.handleEditUser}
            required/>
        )}
        </div>
      </div>
    );
  }
}

export default App;
