'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export function AvatarGroup({ children, className, ...props }: AvatarGroupProps) {
  return (
    <div
      className={cn('flex flex-wrap items-center -space-x-3 hover:space-x-1 transition-all duration-300', className)}
      {...props}
    >
      {children}
    </div>
  )
}

interface AvatarGroupTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  className?: string
}

export function AvatarGroupTooltip({ children, className, ...props }: AvatarGroupTooltipProps) {
  return (
    <span
      className={cn(
        'pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 shadow-lg transition-all duration-200 group-hover/avatar:opacity-100 group-hover/avatar:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
