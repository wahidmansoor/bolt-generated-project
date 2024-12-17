import React, { useState } from 'react';
import { cn } from '../../utils/cn';

interface SplitPanelProps {
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
  leftPanelTitle?: string;
  rightPanelTitle?: string;
}

export function SplitPanel({
  leftPanel,
  rightPanel,
  leftPanelTitle = 'Left Panel',
  rightPanelTitle = 'Right Panel'
}: SplitPanelProps) {
  const [activePanel, setActivePanel] = useState<'left' | 'right' | null>(null);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left Panel */}
      <div
        role="region"
        aria-label={leftPanelTitle}
        tabIndex={0}
        className={cn(
          'w-1/2 h-full p-6 relative',
          'transition-all duration-300 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          'hover:scale-[1.02] hover:z-10',
          activePanel === 'left' && 'shadow-[0_0_30px_rgba(59,130,246,0.2)]',
          'animate-[slideIn_0.5s_ease-out]'
        )}
        onMouseEnter={() => setActivePanel('left')}
        onMouseLeave={() => setActivePanel(null)}
        onFocus={() => setActivePanel('left')}
        style={{ transformOrigin: 'left center' }}
      >
        <div className="h-full overflow-auto rounded-lg bg-white shadow-lg">
          {leftPanel}
        </div>
      </div>

      {/* Right Panel */}
      <div
        role="region"
        aria-label={rightPanelTitle}
        tabIndex={0}
        className={cn(
          'w-1/2 h-full p-6 relative',
          'transition-all duration-300 ease-in-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
          'hover:scale-[1.02] hover:z-10',
          activePanel === 'right' && 'shadow-[0_0_30px_rgba(59,130,246,0.2)]',
          'animate-[slideIn_0.5s_ease-out_0.1s]'
        )}
        onMouseEnter={() => setActivePanel('right')}
        onMouseLeave={() => setActivePanel(null)}
        onFocus={() => setActivePanel('right')}
        style={{ transformOrigin: 'right center' }}
      >
        <div className="h-full overflow-auto rounded-lg bg-white shadow-lg">
          {rightPanel}
        </div>
      </div>
    </div>
  );
}
