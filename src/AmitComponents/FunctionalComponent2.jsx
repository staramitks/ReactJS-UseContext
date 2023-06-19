import * as React from 'react';

import FunctionalComponent3 from './FunctionalComponent3';

function FunctionalComponent2(props) {
  return (
    <>
      <h1>{`Hello FunctionalComponent2 ${props.user}!`}</h1>
      <FunctionalComponent3 user={props.user} />
    </>
  );
}
export default FunctionalComponent2;
