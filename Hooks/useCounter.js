import { useState } from "react";

const Counter = ({ initial = 0, lowerBound = 0, upperBound = 10 }) => {
  const [count, setCount] = useState(initial);

  const handleIncrease = () => {
    if (count < upperBound) {
      setCount(count + 1);
    }
  };
  const handleDecrease = () => {
    if (count > lowerBound) {
      setCount(count - 1);
    }
  };

  return {
    count,

    handleIncrease,
    handleDecrease,
  };
};

export default Counter;
