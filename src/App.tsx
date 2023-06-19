import * as React from 'react';
import './style.css';
import FunctionalComponent1 from './AmitComponents/FunctionalComponent1';
import UserContextComponent1 from './UserContextComponents/UserContextComponent1';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <FunctionalComponent1 />
      <UserContextComponent1 />
    </div>
  );
}
