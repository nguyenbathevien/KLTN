import React from 'react';

const Card = ({ children }) => (
    <div className="bg-white shadow-xl rounded-2xl p-10 w-[40rem] border border-gray-200 bg-opacity-90">
      {children}
    </div>
  );

export default Card;