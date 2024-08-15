import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegHandshake } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { MdRedeem } from "react-icons/md";
import { TiGroupOutline } from "react-icons/ti";
import { FaUser } from "react-icons/fa";
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

type TSidebarProps = {
    sidebarOpen: boolean,
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SIdebar = ({ sidebarOpen, setSidebarOpen }: TSidebarProps) => {
    const pathName = usePathname();


    const sidebarItems = [
        { title: 'Partners', href: '/dashboard/partners', logo: <FaRegHandshake /> },
        { title: 'Orders', href: '/', logo: <IoCartOutline /> },
        { title: 'Products', href: '/', logo: <FaBoxOpen /> },
        { title: 'Redeems & Exchanges', href: '/dashboard/redeems-and-exchanges', logo: <MdRedeem /> },
        { title: 'Customers', href: '/', logo: <TiGroupOutline /> },
        { title: 'Users', href: '/dashboard/users', logo: <FaUser /> },
    ]
    return (
        <section className='flex w-[300px] z-10'>
            <aside className="flex flex-col fixed h-full bg-primary text-white items-center">
                <Link href={'/'} className='flex items-center justify-center gap-2 py-4'>
                    <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={30}
                        height={30} />
                    <span>Logo</span>
                </Link>
                <hr className='bg-white w-full' />
                <div className="mt-6 px-2 pt-18">
                    <nav className="">
                        <div className="flex flex-col gap-y-4">
                            {
                                sidebarItems.map((item, index) => (
                                    <Link key={index} href={item.href} className={cn("flex items-center p-2 gap-x-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700", pathName === item.href && 'bg-gray-100 text-gray-700')}>
                                        <div className=''>
                                            {item.logo}
                                        </div>
                                        <span>{item.title}</span>
                                    </Link>
                                ))
                            }
                        </div>
                    </nav>
                </div>
            </aside>
        </section>
    )
}

export default SIdebar