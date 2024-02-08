// Users.js
import React from 'react';

function Users({ users, handleDeleteUser, handleEdit }) {
  return (
    <div className='user'>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <div>Gen: {user.gen}</div>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            <button onClick={() => handleEdit(user.id)}>Edit</button> {/* Add Edit button */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
