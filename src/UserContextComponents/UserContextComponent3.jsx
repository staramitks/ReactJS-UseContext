import { useContext } from 'react';
import * as React from 'react';
import UserContext from './UserContext';

function UserContextComponent3() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default UserContextComponent3;
