import React from 'react'
import Navbar from '../../components/navigation/Navbar';

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <>{children}</>
        </>
    )
}
