import React, { useState } from "react";
import reactLogo from "./assets/react.svg";

//@ts-expect-error - fuck you
const FlightBoardApp = React.lazy(() => import("flight_board/FlightBoardApp"));
const PassengerServicesApp = React.lazy(
  //@ts-expect-error - fuck you
  () => import("passenger_services/PassengerServicesApp")
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading Flight Board...</div>}>
        <FlightBoardApp />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Passenger Services...</div>}>
        <PassengerServicesApp />
      </React.Suspense>
    </div>
  );
}

export default App;
