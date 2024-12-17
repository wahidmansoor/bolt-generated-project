import React from 'react';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  iconColor?: string;
  children: React.ReactNode;
}

export function Card({ title, icon, iconColor = 'text-gray-600', children }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <div className={`h-6 w-6 mr-2 ${iconColor}`}>{icon}</div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      {children}
    </div>
  );
}
