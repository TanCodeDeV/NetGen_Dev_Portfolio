import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const GITHUB_USERNAME = "TanCodeDeV"; // Replace with your GitHub username

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch repositories");
      }
      const data = await response.json();

      // 🔹 Sort repositories by 'created_at' in descending order (latest first)
      const sortedRepos = data.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );

      setRepos(sortedRepos);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center bg-base-100 p-6">
      <h1 className="text-4xl font-bold text-primary mb-6">My Projects 🚀</h1>

      {loading ? (
        <p className="text-neutral-content">Loading projects...</p>
      ) : repos.length === 0 ? (
        <p className="text-neutral-content">No React projects found.</p>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto p-4"
          style={{
            maxHeight: "70vh",
            scrollbarWidth: "thin",
            scrollbarColor: "#1E40AF #E5E7EB",
          }}
        >
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              className="card w-80 bg-base-200 shadow-xl p-4"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-xl font-semibold">{repo.name}</h2>
              <p className="text-sm text-neutral-content mt-2">
                {repo.description || "No description available."}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Created on: {new Date(repo.created_at).toLocaleDateString()}
              </p>
              <div className="mt-4">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
