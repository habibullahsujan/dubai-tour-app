'use client'
import React, { useState } from 'react'
import SIdebar from '../Sidebar'
import Navbar from '../Navbar'
import { usePathname } from 'next/navigation'




const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState('')
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const pathName = usePathname();

    return (
        <main>
            <div className='flex'>
                {sidebarOpen &&
                    <SIdebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}
                <div className='flex flex-col w-full'>
                    <Navbar isVisible={isVisible} setIsVisible={setIsVisible} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    <div className={isVisible === 'openNotificationMenu' || isVisible === 'openProfileMenu' ? 'blur-sm' : ''}>
                        {children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout