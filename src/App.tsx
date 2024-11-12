import LocationProvider from "./LocationProvider";
import RoutesWithAnimation from "./RoutesWithAnimation";

function App() {
  return (
    <>
        <LocationProvider>
          <RoutesWithAnimation />
        </LocationProvider>
    </>
  );
}

export default App;
