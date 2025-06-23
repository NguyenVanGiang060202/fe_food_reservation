"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { SignInModal } from './SignInModal'



export default function Navbar() {
    const [isOpenModalLogin, setIsOpenModalLogin] = useState(false)
    return (
        <header className="w-full shadow-sm bg-white sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-gray-900">
                    MyApp
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-6">
                    <Link href="/features" className="text-gray-600 hover:text-gray-900">
                        Features
                    </Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                        Pricing
                    </Link>
                    <Link href="/about" className="text-gray-600 hover:text-gray-900">
                        About
                    </Link>
                </nav>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" onClick={()=>setIsOpenModalLogin(!isOpenModalLogin)}>
                        Login
                    </Button>
                    <SignInModal isOpen={isOpenModalLogin} setIsOpen={setIsOpenModalLogin} />
                    <Button size="sm">Sign Up</Button>
                </div>

                {/* Mobile menu icon */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    <MenuIcon className="h-5 w-5" />
                </Button>
            </div>
            <Separator />
        </header>
    )
}
