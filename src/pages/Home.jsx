import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const GITHUB_USERNAME = "TanCodeDeV"; // 🔹 Replace with your GitHub username

const Home = () => {
  const navigate = useNavigate();
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    // Fetch GitHub profile data
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.avatar_url) {
          setProfilePic(data.avatar_url);
        }
      })
      .catch((err) => console.error("Error fetching GitHub data:", err));
  }, []);

  return (
    <section className="h-screen flex flex-col lg:flex-row justify-center items-center bg-base-200 text-center lg:text-left px-6">
      {/* Left Section: Text Content */}
      <div className="flex flex-col items-center lg:items-start">
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-primary"
        >
          Hi, I'm <span className="text-secondary">Tanmayi Bhave</span>
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl mt-4 text-accent"
        >
          Crafting Scalable & High-Performance Web Experiences 🚀
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-4 text-lg text-neutral-content max-w-xl"
        >
          A results-driven <strong>Frontend Engineer</strong> with a passion for
          <strong>
            {" "}
            building dynamic, scalable, and high-performance web applications
          </strong>
          . Experienced in crafting seamless user experiences with
          <strong>
            {" "}
            React.js, Redux, Tailwind CSS, and cutting-edge frontend
            technologies
          </strong>
          . Dedicated to optimizing application performance through
          <strong>
            {" "}
            lazy loading, code-splitting, and efficient state management
          </strong>
          .
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary mt-6"
          onClick={() => navigate("/projects")} // Navigate to Projects Page
        >
          View My Work 🚀
        </motion.button>
      </div>

      {/* Right Section: Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-8 lg:mt-0 lg:ml-12"
      >
        <img
          src={profilePic || "/default-profile.jpg"} // 🔹 Use fetched GitHub avatar or fallback image
          alt="Tanmayi Bhave"
          className="w-90 h-90 lg:w-72 lg:h-72 rounded-full shadow-lg border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default Home;
