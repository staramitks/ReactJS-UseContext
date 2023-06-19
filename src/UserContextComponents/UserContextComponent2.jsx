import { useState, createContext, useContext } from 'react';
import * as React from 'react';
import UserContextComponent3 from './UserContextComponent3';

function UserContextComponent2(props) {
  return (
    <>
      <h1> Hello from UserContextComponent2 </h1>
      <UserContextComponent3 />
    </>
  );
}

export default UserContextComponent2;
