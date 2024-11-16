'use client';
import { Navigation } from '@/app/components/Navigation';

export default function Home() {
  return (
    <div className='h-full flex flex-col w-full min-h-screen'>
      <div className="background"></div>
      <Navigation />
    </div>
  );
}
