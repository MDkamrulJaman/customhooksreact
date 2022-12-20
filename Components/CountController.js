import React from "react";

const CountContoller = ({ count, handleIncrease, handleDecrease }) => {
  return (
    <>
      <div className="flex">
        <button
          onClick={handleIncrease}
          className="bg-green-500 hover:bg-gray-400 text-gray-500 font-bold py-2 px-4 rounded-l"
        >
          +
        </button>

        <span>{count}</span>

        <button
          onClick={handleDecrease}
          className="bg-red-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        >
          -
        </button>
      </div>
    </>
  );
};

export default CountContoller;
