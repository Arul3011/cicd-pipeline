import React from 'react';

const NavBar = () => {
  return (
    <nav className="w-full p-5 bg-teal-800 text-teal-50  flex justify-between items-center shadow-lg">
      <h1 className="text-xl font-bold">
        &lt; CiCd Pipeline &#47; &gt;
      </h1>
      <a
        href="#about"
        className="text-lg font-medium hover:text-teal-200 transition-colors duration-200"
      >
        About
      </a>
    </nav>
  );
};

export default NavBar;
