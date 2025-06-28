import React from 'react'

export default function layout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        {children}
    </div>
  )
}
