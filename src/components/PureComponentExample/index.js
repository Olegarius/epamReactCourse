import React, { useCallback, useState } from "react";

const PureComponentExample = () => {
  const [counter, setCounter] = useState(0);
  const inc = useCallback(() => setCounter(counter => counter + 1), [setCounter]);
  const dec = useCallback(() => setCounter(counter => counter - 1), [setCounter]);
  return (<>
    <button onClick={inc}>Increment</button>
    {counter}
    <button onClick={dec}>Decrement</button>
  </>);
}

  export default React.memo(PureComponentExample);
