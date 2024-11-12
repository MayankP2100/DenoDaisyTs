import { Route, Routes, useLocation } from "react-router-dom";
import JokesFinder from "./JokesFinder";
import Home from "./Home";
import Todos from "./Todos";

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <Routes location={location} key={location.key}>
      <Route path="/" element={<Home />} />
      <Route path="/jokes" element={<JokesFinder />} />
      <Route path="/todos" element={<Todos />} />
    </Routes>
  );
}

export default RoutesWithAnimation;
