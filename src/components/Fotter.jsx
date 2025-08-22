import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 text-blue-50 py-6 mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
      <p className="text-center md:text-left">&copy; {new Date().getFullYear()} CI/CD Pipeline Project</p>

      <div className="flex gap-6">
        <a
          href="https://github.com/arul3011"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
        >
          <FaGithub size={20} /> GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/arul-y-558491270"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-200 transition-colors duration-200"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
