import React from 'react';

export default function Header({ weather, date, currentWeek }) {
  return (
    <div className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="text-lg font-bold">Welcome to SummerTech</div>
      <div className="flex flex-col items-end">
        <div className="text-sm">{date}</div>
        <div className="text-sm">{currentWeek}</div>
      </div>
    </div>
  );
}


