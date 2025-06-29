import Sidebar from '@/components/navigation/Sidebar';
import React from 'react'

export default function layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div className="min-h-screen flex w-full max-w-screen h-full bg-gray-100 ">
            <Sidebar/>
            {children}
        </div>
    )
}
