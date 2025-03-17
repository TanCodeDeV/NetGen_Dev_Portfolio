import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-base-200 text-center px-6">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-bold text-primary"
      >
        Hi, I'm <span className="text-secondary">Shailesh Bhave</span>
      </motion.h1>

      {/* Animated Subtitle */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-2xl mt-4 text-accent"
      >
        A Passionate Frontend Developer 🚀
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-4 text-lg text-neutral-content max-w-xl"
      >
        I specialize in building modern, responsive, and high-performance web
        applications using
        <span className="text-primary font-semibold">
          {" "}
          React.js, Tailwind CSS
        </span>
        , and the latest frontend technologies.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary mt-6"
        onClick={() => (window.location.href = "#projects")}
      >
        View My Work 🚀
      </motion.button>
    </section>
  );
};

export default Home;
