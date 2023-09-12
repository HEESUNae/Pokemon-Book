import React, { useEffect, useRef } from 'react';

const BaseStat = ({ valueStat, nameStat, type }) => {
  const bg = `bg-${type}`;
  const ref = useRef(null);

  useEffect(() => {
    ref.current.style.width = valueStat + '%';
  }, []);

  return (
    <tr className="w-full text-white">
      <td className="sm:px-5">{nameStat}</td>
      <td className="px-2 sm:px-3">{valueStat}</td>
      <td>
        <div className="flex items-start h-2 min-w-[10rem] bg-gray-600 rounded overflow-hidden">
          <div ref={ref} className={`h-3 ${bg}`}></div>
        </div>
      </td>
      <td className="px-2 sm:px-5">100</td>
    </tr>
  );
};

export default BaseStat;
