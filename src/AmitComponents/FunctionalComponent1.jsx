import * as React from 'react';
import { useState } from 'react';
import FunctionalComponent2 from './FunctionalComponent2';

function FunctionalComponent1() {
  const [user, setUser] = useState('Jesse Hall');

  return (
    <>
      <h1>{`Hello FunctionalComponent1 ${user}!`}</h1>
      <FunctionalComponent2 user={user} />
    </>
  );
}

export default FunctionalComponent1;
