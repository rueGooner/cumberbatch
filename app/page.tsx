'use client';
import { Navigation } from '@/app/components/Navigation';
import { Background } from '@/app/components/Background';

export default function Home() {
  return (
    <div className='h-full flex flex-col w-full min-h-screen'>
      <Background />
      <Navigation />
    </div>
  );
}
