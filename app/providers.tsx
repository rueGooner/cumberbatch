// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'
import { Navigation } from '@/components/Navigation';

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <div className="w-full h-screen relative">
        <Navigation/>
        {children}
      </div>
    </NextUIProvider>
  )
}
