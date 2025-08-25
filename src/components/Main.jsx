import React from 'react';

const MainCol = ({ data }) => {
  return (
    <div className=" bg-blue-50 flex flex-col items-center p-6" >
      <h1 className="text-center text-4xl font-bold text-blue-900 mb-6">WELCOME!</h1>

      <main className="w-full max-w-6xl  bg-white rounded-2xl shadow-2xl p-6 flex flex-wrap justify-center items-start gap-3 overflow-auto hide-scrollbar">
        {data.map((val, index) => (
          <a
             href={val.url}   
            target='_blank'
            key={index}
             rel="noopener noreferrer" 
            className="bg-blue-100 text-blue-900 font-mono text-base sm:text-lg md:text-xl px-3 py-2 rounded-lg hover:scale-105 hover:bg-blue-200 transition-all duration-200 cursor-pointer flex-1 text-center"
            style={{ minWidth: '100px', maxWidth: '150px' }}
          >
            {val.name }
          </a>
        ))}
      </main>
    </div>
  );
};

export default MainCol;
