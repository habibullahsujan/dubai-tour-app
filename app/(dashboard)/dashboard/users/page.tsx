'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { SlOptionsVertical } from 'react-icons/sl'
import { CiExport } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { BsMenuButton } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { cn } from '@/lib/utils'
import { TbFilterEdit } from "react-icons/tb";
import AddUser from './AddUser'
import EditUser from './EditUser'

const userData = [{ id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' }, { id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' }, { id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' }, { id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' }, { id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' }, { id: '01', userImg: '/image-man.svg', userId: 'ID-#10403', userName: 'Jordan Stevenson', userEmail: 'dayna19@yahoo.com', status: 'active', permissions: 'super admin' },]
const UsersPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className='relative'>
     <div onClick={()=>setOpen(!open)} className={cn(open ? 'blur-md opacity-90' : "")}>
     <div className='p-4'>
        <div className="flex items-center justify-between mt-16">
          <h2 className='font-bold text-primary text-lg py-6'>
            Users List
          </h2>
          <div className="flex items-center justify-center gap-x-2 border rounded-md p-2 border-primary">
            <CiExport className="size-5" />
            <span className="text-sm">Export</span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex border w-2/6 items-center justify-center py-2 rounded-md pl-1">
            <IoSearch className="size-7" />
            <div className="border-l-2 border-gray-300 h-6 ml-2"></div>
            <input placeholder="Search or type" className="border-none focus:outline-none focus:ring-0 w-full pl-2" />
          </div>
          <div className='flex gap-x-3'>
            <div className="flex rounded-md border">
              <button className={cn("flex gap-x-2 items-center justify-center  text-white p-2 cursor-pointer bg-primary rounded-l-md")}>
                <BsMenuButton className="size-7" />
                <span>Board</span>
              </button>
              <button className={cn("flex gap-x-2 items-center justify-center text-primary p-2 cursor-pointer ")}>
                <HiMenuAlt2 className="size-7" />
                <span>Table</span>
              </button>
            </div>
            <button className='border p-2 rounded-md shadow-md'>
              <TbFilterEdit className="size-6" />
            </button>
          </div>
        </div>
      </div>
      <Table className='shadow-xl border'>
        <TableHeader>
          <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
            <TableHead className="w-[100px] uppercase text-[#014C46E5]">ID #</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Users</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Status</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Permissions</TableHead>
            <TableHead className="font-semibold uppercase text-[#014C46E5]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userData.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-nowrap pr-24">
                <div>
                  <Link href={`/dashboard/redeems-and-exchanges/${item.id}`}>{item.userId}</Link>
                </div>
              </TableCell>

              <TableCell className="font-medium">
                <div className='flex gap-x-2'>
                  <Image src={item.userImg} alt='user image' height={50} width={50} />
                  <div className="flex flex-col">
                    <span>{item.userName}</span>
                    <span className="text-[#2F2B3DB2] text-sm">{item.userEmail}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex flex-col">
                  <span className={cn(item.status === 'active' && "bg-[#28C76F29] text-[#28C76F]", 'text-center py-2 px-3 capitalize')}>{item.status}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">

                <span className={cn(item.permissions === 'super admin' && 'bg-[#F0900029] text-[#F09000]', 'capitalize py-2 px-3')}>{item.permissions}</span>

              </TableCell>
              <TableCell className="font-medium">
                <button onClick={() => setOpen(true)} className="flex justify-end cursor-pointer">
                  <SlOptionsVertical className="size-6" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex rounded-md w-full items-center justify-end my-8">
        <button className={cn("flex gap-x-2 items-center justify-center  text-white p-2 cursor-pointer border bg-primary rounded-l-md border-primary font-semibold")}>

          <span>Previous</span>
        </button>
        <button className={cn("flex gap-x-2 items-center justify-center px-4 py-2 cursor-pointer text-primary border border-[#014C461A] font-semibold")}>
          <span>1</span>
        </button>
        <button className={cn("flex gap-x-2 items-center justify-center p-2 cursor-pointer text-primary border border-[#014C461A] rounded-r-md font-semibold")}>
          <span>Next</span>
        </button>
      </div>
     </div>
      <div className='absolute top-24 right-8 bg-white rounded-md shadow-md p-2'>
        {open &&
        //  <AddUser/>
        <EditUser/>
        }
      </div>
    </section>
  )
}

export default UsersPage