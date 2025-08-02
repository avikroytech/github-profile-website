'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="space-y-24">
      <motion.section id="about" className="scroll-mt-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">I'm a passionate developer who loves building web apps and learning new technologies.</p>
      </motion.section>

      <motion.section id="skills" className="scroll-mt-24" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
        </ul>
      </motion.section>

      <motion.section id="projects" className="scroll-mt-24" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">Here are a few selected projects that showcase my work and skills.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project One</h3>
            <p className="text-gray-600 dark:text-gray-400">Description of project one with technologies used.</p>
          </div>
          <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project Two</h3>
            <p className="text-gray-600 dark:text-gray-400">Description of project two with technologies used.</p>
          </div>
        </div>
      </motion.section>

      <motion.section id="experience" className="scroll-mt-24" initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <p className="text-gray-700 dark:text-gray-300">Include your work experience, internships, or notable contributions here.</p>
      </motion.section>

      <motion.section id="contact" className="scroll-mt-24" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Feel free to reach out to me via <a href="mailto:youremail@example.com" className="text-blue-600 hover:underline">email</a>.
        </p>
      </motion.section>
    </div>
  );
}
