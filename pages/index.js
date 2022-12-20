import useCounter from "../Hooks/useCounter";

import CountController from "../Components/CountController";
import ApiCallUsingCustomHooks from "../Components/ApiCallUsingCustomHooks";
export default function Home() {
  const { count, handleIncrease, handleDecrease } = useCounter({});

  const {
    count: count1,
    handleIncrease: handleIncrease1,
    handleDecrease: handleDecrease1,
  } = useCounter({});

  const counter3 = useCounter({});

  return (
    <>
      <h1 className="text-red-800  font-bold">this is fo learning react core smoothly</h1>
      <CountController
        count={count}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
      />
      <CountController
        count={count1}
        handleIncrease={handleIncrease1}
        handleDecrease={handleDecrease1}
      />
      <CountController
        count={counter3.count}
        handleIncrease={counter3.handleIncrease}
        handleDecrease={counter3.handleDecrease}
      />

      <ApiCallUsingCustomHooks />

      
    </>
  );
}
