import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const userList = useResources('users');

  return (
    <ul>
      {userList.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
