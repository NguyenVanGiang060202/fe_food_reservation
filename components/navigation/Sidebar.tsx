"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Clock, Hamburger, Inbox, LogOut, Settings } from 'lucide-react'
import { useAuthStore } from '@/store/auth-store'
import { redirect } from 'next/navigation'

export default function Sidebar() {

    const { logout } = useAuthStore()


    async function handleLogout() {
        await logout()
        redirect('/')
    }
    return (
        <div className="w-1/4 max-h-screen h-dvh bg-white border-r border-gray-200 flex flex-col p-10 ">
            <div className="flex items-center gap-4 w-full pb-10">
                <Avatar className="border size-12 rounded-md">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Image user" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="font-bold text-lg">
                    Food Booking
                </div>
            </div>
            <div className="h-full flex mt-4 w-full flex-col gap-10">
                <Button className='w-full h-fit rounded-md text-bold text-lg flex bg-white justify-start gap-4 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-50 transition-colors shadow-none'>
                    <Inbox className='size-8' />
                    Incoming
                </Button>
                <Button className='w-full h-fit rounded-md text-bold text-lg flex bg-white justify-start gap-4 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-50 transition-colors shadow-none'>
                    <Clock className='size-8' />
                    Waiting pickup
                </Button>
                <Button className='w-full h-fit rounded-md text-bold text-lg flex bg-white justify-start gap-4 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-50 transition-colors shadow-none'>
                    <Hamburger className='size-8' />
                    Menu
                </Button>
                <Button className='w-full h-fit rounded-md text-bold text-lg flex bg-white justify-start gap-4 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-50 transition-colors shadow-none'>
                    <Settings className='size-8' />
                    Settings
                </Button>
            </div>
            <div className="flex">
                <Button className='w-full h-fit rounded-md text-bold text-lg flex bg-white justify-start gap-4 hover:bg-indigo-800 text-indigo-800 hover:text-indigo-50 transition-colors shadow-none' onClick={handleLogout}>
                    <LogOut className='size-8' />
                    Logout
                </Button>
            </div>
        </div>
    )
}
