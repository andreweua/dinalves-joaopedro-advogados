import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'active';
  size?: 'default' | 'sm' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/60 shadow-sm',
      outline: 'bg-transparent text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 border border-slate-800',
      active: 'bg-slate-100 text-slate-950 font-bold shadow-md shadow-white/10 hover:bg-white',
      secondary: 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800',
      ghost: 'bg-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
    };

    const sizes = {
      default: 'h-9 px-4 py-2 text-sm',
      sm: 'h-7 px-2.5 text-xs rounded-md',
      lg: 'h-11 px-6 text-base rounded-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
