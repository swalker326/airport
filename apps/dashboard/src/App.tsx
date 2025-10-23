// //@ts-expect-error
// import FlightBoardApp from "flight_board/FlightBoardApp";
//@ts-expect-error
import PassengerServiceApp from "passenger_services/PassengerServicesApp";

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      {/* <FlightBoardApp /> */}
      <PassengerServiceApp />
    </div>
  );
};

export default App;
