import React from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineStock } from "react-icons/ai";
import { FaPowerOff } from "react-icons/fa6";


type TProfileMenuProps = {
    setIsVisible: React.Dispatch<React.SetStateAction<string>>,
    className?: string
}
const ProfileMenu = ({ setIsVisible, className }: TProfileMenuProps) => {
    return (
        <div onClick={() => setIsVisible('openProfileMenu')} className={className}>
            <div className='overflow-auto'>
                <button className='flex items-center gap-x-2 p-6'>
                    <IoSettingsOutline className='size-6' />
                    <span className='font-semibold text-lg'>Setting</span>
                </button>
                <hr />
                <button className='flex items-center gap-x-2 p-6'>
                    <AiOutlineStock className='size-6' />
                    <span className='font-semibold text-lg'>Rating & Review</span>
                </button>
                <hr />
                <button className='flex items-center gap-x-2 p-6'>
                    <FaPowerOff className='size-6' />
                    <span className='font-semibold text-lg'>Logout</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileMenu