import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGreeting } from "./slices/greetingSlice"; // Import your action

function Greeting() {
  const greeting = useSelector((state) => state.greeting.value);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]); // Fetch greeting on component mount

  return (
    <div className="container">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Greeting;
