import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  // Google Drive Embed URL
  const resumePreviewUrl =
    "https://drive.google.com/file/d/1bKk_7uGjYfmAtZBEJpoPWmHOmyZ6IPH2/preview";

  // Google Drive Direct Download Link (Modified)
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1bKk_7uGjYfmAtZBEJpoPWmHOmyZ6IPH2";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-6">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Resume 📄
      </motion.h1>
      {/* Download Button */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={resumeDownloadUrl}
        className="btn btn-primary flex items-center m-6"
        download="Tanmayi_Bhave_Resume.pdf"
      >
        <FaDownload className="mr-2" /> Download Resume
      </motion.a>

      {/* Resume Viewer (Google Drive Embed) */}
      <motion.div
        className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <iframe
          src={resumePreviewUrl}
          className="w-full h-[500px] rounded-lg border"
          title="Resume Preview"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default Resume;
