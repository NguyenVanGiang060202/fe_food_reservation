import React from 'react'
import Navbar from '@/components/navigation/Navbar';

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col min-h-screen max-w-screen-2xl mx-auto'>
        <Navbar />
        {children}
    </div>
  )
}
