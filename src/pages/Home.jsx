import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen px-6 py-4 relative scroll-smooth">

      {/* Fixed Top-Left Heading */}
      <div className="fixed top-4 left-6 text-xl md:text-2xl font-bold text-purple-300 z-50">
        Welcome to My Portfolio
      </div>

      {/* Fixed Top Navigation */}
      <nav className="fixed top-4 right-6 flex space-x-4 z-50">
        <a href="#about" className="text-sm hover:underline text-gray-300">About Me</a>
        <a href="#projects" className="text-sm hover:underline text-gray-300">Projects</a>
        <a href="#mal" className="text-sm hover:underline text-gray-300">MyAnimeList</a>
      </nav>

      {/* Scroll Sections */}
      <div className="pt-24 space-y-32">

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-2xl md:text-4xl text-center">
            ✨ About Me: Just a developer on a hero’s journey.
          </p>
        </motion.section>

        <motion.section
          id="projects"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-2xl md:text-4xl text-center">
            💼 Projects: Bringing ideas to life.
          </p>
        </motion.section>

        <motion.section
          id="mal"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-2xl md:text-4xl text-center">
            📜 MyAnimeList Profile Coming Soon...
          </p>
        </motion.section>

      </div>
    </div>
  );
}
