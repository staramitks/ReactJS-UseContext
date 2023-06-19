import { useState, createContext, useContext } from 'react';
import * as React from 'react';
import UserContextComponent2 from './UserContextComponent2';
import UserContext from './UserContext';

function UserContextComponent1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello UserContextComponent1 ${user}!`}</h1>
      <UserContextComponent2 />
    </UserContext.Provider>
  );
}

export default UserContextComponent1;
