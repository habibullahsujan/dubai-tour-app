import Image from 'next/image'
import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { TiMessage } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

const ProfileDetails = () => {
    return (
        <section className='mt-36 w-[400px] mx-auto shadow-md border p-4'>
            <h2 className='text-center text-pretty font-semibold mb-4'>Settings</h2>
            <hr className='bg-primary w-full' />
            <div className='border shadow-sm rounded-md'>
            <div className='flex justify-center py-4'>
                <Image src={'/image-man.svg'} alt='profile img' height={312} width={312} />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-primary font-bold text-lg'>Cora Marlowe</h1>
                <span className='text-center mb-6'>Super Admin</span>
                <hr className='bg-primary w-full' />
                <div className='flex items-center justify-center gap-x-2 py-1 mt-2'>
                    <MdLocalPhone className='size-6' /><span>+55 (18) 9973 4816</span>
                </div>
                <div className='flex items-center justify-center gap-x-2'>
                    <TiMessage className='size-6' /><span>superadmin@gmail.com</span>
                </div>
            </div>
            </div>
           <div className='flex justify-end mt-2'>
           <button className="flex items-center gap-x-2 shadow-lg border p-2 rounded-md">
              <CiEdit className="size-6" />
              <p>Edit</p>
            </button>
           </div>
        </section>
    )
}

export default ProfileDetails