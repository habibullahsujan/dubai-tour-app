'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { CiExport } from 'react-icons/ci'
import { IoSearch } from 'react-icons/io5'
import { BsMenuButton } from 'react-icons/bs'
import { HiMenuAlt2 } from 'react-icons/hi'
import { TbFilterEdit } from 'react-icons/tb'
import Link from 'next/link'
import Image from 'next/image'
import RatingDisplay from '@/components/RatingDisplay'

const partnersList = [
  { id: '01', userId: 'ID-#10403', name: 'Jordan Stevenson', email: 'dayna19@yahoo.com', img: '/image-man.svg', tags: ['adventure', 'sports'], type: 'Email', paymentTerms: 'Monthly Payment', ratings: 1.5, orders: [{ totalOrders: 50, cancel: 5 }] },
  { id: '01', userId: 'ID-#10403', name: 'Jordan Stevenson', email: 'dayna19@yahoo.com', img: '/image-man.svg', tags: ['adventure', 'sports'], type: 'Email', paymentTerms: 'Monthly Payment', ratings: 2.5, orders: [{ totalOrders: 50, cancel: 5 }] },
  { id: '01', userId: 'ID-#10403', name: 'Jordan Stevenson', email: 'dayna19@yahoo.com', img: '/image-man.svg', tags: ['adventure', 'sports'], type: 'Email', paymentTerms: 'Monthly Payment', ratings: 3.2, orders: [{ totalOrders: 50, cancel: 5 }] },
  { id: '01', userId: 'ID-#10403', name: 'Jordan Stevenson', email: 'dayna19@yahoo.com', img: '/image-man.svg', tags: ['adventure', 'sports'], type: 'Email', paymentTerms: 'Monthly Payment', ratings: 4.6, orders: [{ totalOrders: 50, cancel: 5 }] },
  { id: '01', userId: 'ID-#10403', name: 'Jordan Stevenson', email: 'dayna19@yahoo.com', img: '/image-man.svg', tags: ['adventure', 'sports'], type: 'Email', paymentTerms: 'Monthly Payment', ratings: 5, orders: [{ totalOrders: 50, cancel: 5 }] },
]
const Partners = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <section className='relative'>
      <div onClick={() => setOpen(!open)} className={cn(open ? 'blur-md opacity-90' : "")}>
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
              <TableHead className="font-semibold uppercase text-[#014C46E5]">partners</TableHead>
              <TableHead className="font-semibold uppercase text-[#014C46E5]">Tags</TableHead>
              <TableHead className="font-semibold uppercase text-[#014C46E5]">Type</TableHead>
              <TableHead className="font-semibold uppercase text-[#014C46E5]">Payment Terms</TableHead>
              <TableHead className="font-semibold uppercase text-[#014C46E5]">Ratings</TableHead>
              <TableHead className="font-semibold uppercase text-[#014C46E5]">Orders</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {partnersList.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium text-nowrap pr-24">
                  <div>
                    <Link href={`/dashboard/redeems-and-exchanges/${item.id}`}>{item.userId}</Link>
                  </div>
                </TableCell>

                <TableCell className="font-medium">
                  <div className='flex gap-x-2 items-center'>
                    <Image src={item.img} alt='user image' height={50} width={50} />
                    <div className="flex flex-col">
                      <span>{item.name}</span>
                      <span className="text-[#2F2B3DB2] text-sm">{item.email}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex flex-col gap-1">
                    {
                      item.tags.map((tag, i) => (
                        <span key={i} className={cn("rounded-md px-2 py-1 text-xs text-primary capitalize text-center",
                          tag === 'adventure' && 'bg-[#F0900029] text-[#F09000]', tag === 'sports' && 'bg-[#68686829] text-[#686868]')}>
                          {tag}
                        </span>
                      ))
                    }

                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex flex-col bg-[#316AC129] text-[#316AC1] px-2 py-1 rounded-md text-center">
                    <span>{item.type}</span>
                  </div>
                </TableCell>
                <TableCell className="font-medium">

                  <span className='text-[#28C76F] bg-[#28C76F29] px-2 py-1 rounded-md text-xs'>{item.paymentTerms}</span>

                </TableCell>
                <TableCell className="font-medium">
                  <div className='flex gap-x-1 items-center'>
                    <span>{item.ratings}</span>
                    <RatingDisplay rating={item.ratings} />
                  </div>
                </TableCell>
                <TableCell className="font-medium">
                  <div>
                    {item.orders.map(order => (<div className='flex flex-col' key={order.cancel}>

                      <span className=' text-xs'>Orders: {order.totalOrders}</span>
                      <span className=' text-xs'>Cancel: {order.cancel}</span>
                      <span className='text-xs'>Total: {order.totalOrders + order.cancel}</span>
                    </div>))}
                  </div>
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
        {/* {open &&
        //  <AddUser/>
        <EditUser/>
        } */}
      </div>
    </section>
  )
}

export default Partners