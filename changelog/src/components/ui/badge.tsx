import React from 'react';
import { cn } from '../../lib/utils';
import { TagType } from '../../types/changelog';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TagType | 'default' | 'outline' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const variantStyles: Record<string, string> = {
    novo: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20',
    melhoria: 'bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20',
    correcao: 'bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20',
    default: 'bg-slate-800 text-slate-200 border-slate-700',
    secondary: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    outline: 'text-slate-300 border-slate-700'
  };

  return (
    <div
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide transition-colors',
        variantStyles[variant] || variantStyles.default,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
