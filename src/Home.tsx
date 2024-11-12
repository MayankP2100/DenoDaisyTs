import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring", bounce: 0.25 }}
      className="hero bg-base-200 h-full"
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">
            DenoDaisyTs is a webapp made in ReactJs to test out Deno 2.0,
            DaisyUI and TailwindCSS.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
