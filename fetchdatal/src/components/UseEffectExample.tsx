import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);




//   UseEffect
// In React the useEffect hook is used to manage side effects in functional components
// Fetching data, manually update DOM, settings timers
// useEffect takes in a callback function and takes in two arguments

useEffect(() => {

    // This is the effect function. Code will run after every render.
console.log('This count is');

    // OPTIONAL CLEAN UP FUNCTION. CODE HERE RUNS BEFORE THE COMPONENT IS UNMOUNTED OR BEFORE THE EFFECT RUNS AGAIN.
    // return () => {
    //     console.log('Clean up function');
    // }

}, [/*Dependency array */])
// Whatever is in our array is our dependency. It will make our useEffect fire every time this changes.
// If you provide an empty array, the effect will only run once after the initial render

// You can have multiple useEffects


useEffect(() => {
    console.log('This will re-run everytime our dependency has changed The count is ', count);


}, [count])

useEffect(() => {
  console.log('Subscribe inside our useEffect');
  

  return () => {
    console.log('Unsubscribe from our clean up function', count);
    
    
  }
}, [count])





  // Handle increment
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // Handle decrement
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <h1 className="text-center ">UseEffect Example1</h1>
      <div className="row justify-content-center">
        <div className="col-6 d-flex flex-column align-items-center">
          <p>Count: {count}</p>


          <div>
            <button
              onClick={handleDecrement}
              className="btn btn-outline-primary mx-3 m-2"
            >
              Decrement
            </button>
            <button
              onClick={handleIncrement}
              className="btn btn-outline-primary mx-3 m-2"
            >
              Increment
            </button>
          </div>


        </div>
      </div>
    </>
  );
};

export default UseEffectExample;
