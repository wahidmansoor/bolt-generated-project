import React from 'react';
import { Menu } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm h-16">
        <div className="max-w-full mx-auto px-4">
          <div className="flex items-center h-16">
            <div className="flex items-center">
              <Menu className="h-6 w-6 text-gray-600" />
              <span className="ml-2 text-xl font-semibold">OncoAssist</span>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-full">
        {children}
      </main>
    </div>
  );
}
