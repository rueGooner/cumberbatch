'use client';
import { Navigation } from '@/app/components/Navigation';
import { Background } from '@/app/components/Background';
import { Introduction } from '@/app/components/Introduction';

export default function Home() {
  return (
    <div className='container mx-auto w-full flex flex-col h-svh max-h-svh max-w-screen-xl'>
      {/*<Background isSvg={false} />*/}
      <Navigation />
      <Introduction />
    </div>
  );
}
