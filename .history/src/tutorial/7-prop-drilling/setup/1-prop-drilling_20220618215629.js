import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  
  return (
    <section>
      <h2>prop drilling</h2
    </section>
  )>;
};

export default PropDrilling;
