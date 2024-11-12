import { useEffect, useState } from "react";
import axios from "axios";
import { themeChange } from "theme-change";
import { motion } from "framer-motion";

function JokesFinder() {
  const [joke, setJoke] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchJoke = async (): Promise<void> => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://v2.jokeapi.dev/joke/Any");
      const data = response.data;
      if (data.type === "single") {
        setJoke(data.joke);
      } else if (data.type === "twopart") {
        setJoke(`${data.setup} - ${data.delivery}`);
      }
    } catch (err) {
      setError("Error fetching joke. Please try again later.\n" + err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJoke();
    themeChange(false);
  }, []);

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
      className="h-full bg-base-200"
    >
      <div className="h-full flex flex-col justify-around items-center py-3 mx-[20%]">
        <div className="flex flex-col items-center justify-center gap-3">
          <h1 className="text-5xl text-center font-bold">Jokes Finder</h1>
        </div>
        <div className="flex justify-center items-center">
          {error && <p className="text-red-500">{error}</p>}{" "}
          {isLoading && (
            <span className="loading loading-spinner loading-sm"></span>
          )}
          {!isLoading && <p className="text-2xl">{joke}</p>}{" "}
        </div>
        <button
          onClick={fetchJoke}
          className="btn btn-wide btn-lg btn-outline text-xl"
        >
          Get Another Joke
        </button>
      </div>
    </motion.div>
  );
}

export default JokesFinder;
