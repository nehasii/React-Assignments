import React, { useState, useEffect } from 'react';
import usePrevious from './CustomHook2';

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  useEffect(() => {
    console.log(`Current count: ${count}`);
    console.log(`Previous count: ${previousCount}`);
  }, [count, previousCount]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
