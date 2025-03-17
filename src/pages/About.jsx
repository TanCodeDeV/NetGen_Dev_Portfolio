import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa"; // Icons for better UI

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center bg-base-100 p-6">
      <h1 className="text-4xl font-bold text-primary mb-6">About Me 👩‍💻</h1>

      {/* Animated Card */}
      <motion.div
        className="card w-full max-w-4xl bg-base-200 shadow-xl p-8 flex flex-col lg:flex-row items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* About Text */}
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-secondary">
            Hi, I'm Tanmayi Bhave 🚀
          </h2>
          <p className="mt-4 text-lg text-neutral-content">
            A <span className="font-semibold">Frontend Developer</span>{" "}
            passionate about crafting modern, responsive, and high-performance
            web applications. With
            <span className="font-semibold"> 2+ years</span> of experience in
            <span className="font-semibold"> React.js</span>, I specialize in
            <span className="font-semibold">
              {" "}
              building scalable UIs, optimizing performance
            </span>
            , and implementing{" "}
            <span className="font-semibold">state management</span> with Redux.
          </p>

          {/* Skills */}
          <h3 className="mt-6 text-xl font-semibold text-accent">
            Skills & Expertise
          </h3>
          <p className="mt-2 text-neutral-content">
            <span className="font-semibold">
              React.js, Redux, JavaScript (ES6+), Tailwind CSS, Material-UI,
              Firebase, Jest
            </span>
          </p>
          <p className="mt-1 text-neutral-content">
            <span className="font-semibold">Tools:</span> Git, GitHub, VS Code,
            Webpack, Postman, Vercel
          </p>

          {/* Work Experience */}
          <h3 className="mt-6 text-xl font-semibold text-accent">
            Work Experience
          </h3>
          <p className="mt-2 text-neutral-content">
            Currently working as a{" "}
            <span className="font-semibold">
              Custom Software Engineer - Analyst at Accenture
            </span>
            , where I build high-quality{" "}
            <span className="font-semibold">React.js</span> applications,
            implement <span className="font-semibold">Redux</span>, and enhance
            UI/UX with
            <span className="font-semibold"> Tailwind CSS</span>.
          </p>

          {/* Contact Information */}
          <h3 className="mt-6 text-xl font-semibold text-accent">
            Get In Touch
          </h3>
          <div className="flex flex-col items-center lg:items-start mt-2 space-y-2 text-neutral-content">
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-primary" />
              <a
                href="mailto:tanmayibhave@gmail.com"
                className="hover:underline"
              >
                tanmayibhave@gmail.com
              </a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-primary" />
              <a href="tel:+919284484989" className="hover:underline">
                +91 9284484989
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex justify-center lg:justify-start space-x-4">
            <a
              href="https://www.linkedin.com/in/tanmayi-bhave-31b6a61a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary flex items-center"
            >
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a
              href="https://github.com/TanCodeDeV"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary flex items-center"
            >
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
