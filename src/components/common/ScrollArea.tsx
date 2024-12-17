import React from 'react';
import { cn } from '../../utils/cn';

interface ScrollAreaProps {
  className?: string;
  children: React.ReactNode;
}

export function ScrollArea({ className, children }: ScrollAreaProps) {
  return (
    <div
      className={cn(
        'overflow-auto scroll-smooth',
        className
      )}
    >
      {children}
    </div>
  );
}
