import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Anagani Mohana Venkata Krishna</h1>
        <p className="text-lg md:text-xl text-gray-600">B.Tech in AI & Data Science | Cloud & Blockchain Enthusiast</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:anaganimvk07@gmail.com"><Mail className="w-6 h-6 hover:text-blue-500" /></a>
          <a href="https://github.com/amohan005" target="_blank"><Github className="w-6 h-6 hover:text-blue-500" /></a>
          <a href="https://linkedin.com/in/mohan-a-686798327" target="_blank"><Linkedin className="w-6 h-6 hover:text-blue-500" /></a>
        </div>
      </motion.header>

      <section className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">
          Motivated undergraduate pursuing B.Tech in Artificial Intelligence and Data Science. Passionate about applying technical knowledge to real-world problems through innovative solutions, with strong interests in cloud technologies, data processing, and blockchain.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl shadow-md hover:shadow-xl transition p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Fake News Prevention using Blockchain</h3>
            <p className="text-gray-600">Developed a system using blockchain technology for verifying news authenticity and providing decentralized fact-checking to build user trust.</p>
          </div>
          <div className="rounded-2xl shadow-md hover:shadow-xl transition p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Handwritten Signature Recognition</h3>
            <p className="text-gray-600">Implemented deep learning models (CNN and LSTM) to accurately identify and verify handwritten signatures.</p>
          </div>
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['C', 'Java', 'Python', 'SQL', 'Oracle', 'AWS', 'Juniper', 'Blockchain', 'CNN', 'LSTM'].map(skill => (
            <span key={skill} className="bg-gray-100 px-4 py-2 rounded-full shadow-sm text-sm font-medium">{skill}</span>
          ))}
        </div>
      </section>

      <section className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Internships</h2>
        <div className="flex flex-col gap-6 items-center">
          <div className="max-w-xl rounded-2xl shadow-md hover:shadow-xl transition p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Data Engineering Virtual Internship (AWS)</h3>
            <p className="text-gray-600">Completed a 10-week virtual internship focused on data processing, storage, and cloud technologies.</p>
          </div>
          <div className="max-w-xl rounded-2xl shadow-md hover:shadow-xl transition p-6 bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Networking Cloud Virtual Internship (Juniper)</h3>
            <p className="text-gray-600">Hands-on experience in designing and managing cloud-based network solutions, including SD-WAN, cloud security, and automation.</p>
          </div>
        </div>
      </section>

      <section className="mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Education</h2>
        <p className="text-gray-600 mb-2">B.Tech in Artificial Intelligence and Data Science, Vasireddy Venkatadri Institute of Technology (2022–2026), CGPA: 7.49/10</p>
        <p className="text-gray-600 mb-2">Intermediate (MPC), Viveka Junior College (2020–2022), Percentage: 87.3%</p>
        <p className="text-gray-600">SSC, Narayana School (2020), CGPA: 9.2/10</p>
      </section>

      <footer className="text-center text-gray-400 text-sm">© 2025 Anagani Mohana Venkata Krishna. All rights reserved.</footer>
    </main>
  );
}

export default App;
