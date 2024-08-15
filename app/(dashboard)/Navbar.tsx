'use client'
import React from 'react'
import { IoMdMenu, IoMdNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import NotificationMenu from './NotificationMenu';
import ProfileMenu from './dashboard/(profile)/ProfileMenu';
import { cn } from '@/lib/utils';

type TNavbarProps = {
    isVisible: string,
    setIsVisible: React.Dispatch<React.SetStateAction<string>>,
    sidebarOpen: boolean,
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>

}

const Navbar = ({ isVisible, setIsVisible,sidebarOpen,setSidebarOpen }:TNavbarProps) => {

    return (
        <section className={cn('fixed  z-20',sidebarOpen ?'w-[81%]':"w-full")}>
            <nav className='bg-primary py-4 px-4 rounded-bl-lg flex items-center justify-between'>
                <button onClick={()=>setSidebarOpen(!sidebarOpen)}>
                    <IoMdMenu className='text-white size-8 cursor-pointer' />
                </button>
                <div className='flex items-center gap-x-4 '>
                    <button onClick={() => setIsVisible(isVisible === 'openNotificationMenu' ? '' : 'openNotificationMenu')}>
                        <IoMdNotifications className='text-white size-8 cursor-pointer' />
                    </button>
                    {isVisible === 'openNotificationMenu' && <NotificationMenu setIsVisible={setIsVisible} />}
                    <div>
                        <Avatar className='cursor-pointer' onClick={() => setIsVisible(isVisible === 'openProfileMenu' ? '' : 'openProfileMenu')}>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        {isVisible === 'openProfileMenu' && <ProfileMenu className={"absolute inset-0 flex flex-col bg-[#FFFFFF] rounded-lg shadow-lg z-10 h-[230px] w-full top-[65px] left-[73%] m-8"} setIsVisible={setIsVisible} />}
                    </div>

                </div>
            </nav>
        </section>
    )
}

export default Navbar