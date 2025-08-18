import React from 'react'
import Navbar from '../../components/navigation/Navbar';
import Sidebar from '@/components/navigation/Sidebar';

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='className="flex w-full h-full min-h-screen bg-white max-w-screen'>
            <Sidebar/>
            <>{children}</>
        </div>
    )
}
