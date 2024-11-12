import { AnimatePresence } from "framer-motion";

function LocationProvider({ children }: { children: JSX.Element }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

export default LocationProvider;
