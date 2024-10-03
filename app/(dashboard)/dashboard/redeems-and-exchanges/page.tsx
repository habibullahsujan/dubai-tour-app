'use client'

import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RedeemAndExchangeTable } from "./RedeemAndExchangeTable";
import { GiHelicopter } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";
import BoardCard from "@/components/BoardCard";
import { CiExport } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BsMenuButton } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { TbFilterEdit } from "react-icons/tb";
import { cn } from "@/lib/utils";


const RedeemsAndExchanges = () => {
  const [dataMode, setDataMode] = useState('board')

  const redeemsAndExchanges = [
    {
      orderId: '#OrderID-999999',
      id: '01',
      type: 'received',
      title: 'Helicopter Tour',
      description: 'Private Helicopter Tour Dubai',
      status: 'Default',
      dateTime: 'August 17, 2024 | 7:00 AM',
      comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },],
      users: [{ userId: '', img: '' }, { userId: '', img: '' }],
      icon: <GiHelicopter className="size-8" />
    },
    {
      orderId: '#OrderID-999999',
      id: '02',
      type: 'received',
      title: 'Helicopter Tour',
      description: 'Private Helicopter Tour Dubai',
      status: 'Default',
      dateTime: 'August 17, 2024 | 7:00 AM',
      comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },],
      users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" />
    },

    {
      orderId: '#OrderID-999999',
      id: '03',
      type: 'processing', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }]
      , icon: <GiHelicopter className="size-8" />

    },
    {
      orderId: '#OrderID-999999',
      id: '04',
      type: 'processing', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }]
      , icon: <GiHelicopter className="size-8" />

    },
    { orderId: '#OrderID-999999', id: '05', type: 'processing', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Processing', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> }
    ,
    { orderId: '#OrderID-999999', id: '06', type: 'booking', title: 'Texi Tour', description: 'Rented texi Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <FaCarSide className="size-8" /> },
    { orderId: '#OrderID-999999', id: '07', type: 'booking', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> },
    { orderId: '#OrderID-999999', id: '08', type: 'cancelled', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Staycation', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> },
    { orderId: '#OrderID-999999', id: '09', type: 'cancelled', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Collection', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> }
  ]


  const receivedType = redeemsAndExchanges.filter(item => item.type === 'received');
  const bookingType = redeemsAndExchanges.filter(item => item.type === 'booking');
  const processingType = redeemsAndExchanges.filter(item => item.type === 'processing');
  const cancelledType = redeemsAndExchanges.filter(item => item.type === 'cancelled');

  return (
    <section className="">
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
      {
        dataMode === 'board' && <div className="mt-8 grid grid-cols-12 gap-4 justify-items-center">
          <div className="flex flex-col gap-y-3 col-span-3 w-[250px]">
            <div className="border-t-4 border-[#CF0000] shadow-lg p-6 rounded-b-md">
              <h2 className="text-[#CF0000] font-semibold">Cancelled</h2>
            </div>
            {
              receivedType.map((item, index) => (
                <BoardCard item={item} key={index} />

              ))
            }
            <button className="flex items-center gap-x-2 shadow-lg border p-3 rounded-md cursor-pointer">
              <FaPlus className="size-6" />
              <p>Add New Item</p>
            </button>
          </div>
          <div className="flex flex-col gap-y-3 w-[250px] col-span-3">
            <div className="border-t-4 border-[#F09000] shadow-lg p-6 rounded-b-md ">
              <h2 className="text-[#F09000] font-semibold">Processing</h2>
            </div>
            {
              processingType.map((item, index) => (
                <BoardCard item={item} key={index} />

              ))
            }
            <button className="flex items-center gap-x-2 shadow-lg border p-3 rounded-md cursor-pointer">
              <FaPlus className="size-6" />
              <p>Add New Item</p>
            </button>
          </div>
          <div className="flex flex-col gap-y-3 w-[250px] col-span-3">
            <div className="border-t-4 border-[#005928] shadow-lg p-6 rounded-b-md">
              <h2 className="text-[#005928] font-semibold">Booking</h2>
            </div>
            {
              bookingType.map((item, index) => (
                <BoardCard item={item} key={index} />

              ))
            }
            <button className="flex items-center gap-x-2 shadow-lg border p-3 rounded-md cursor-pointer">
              <FaPlus className="size-6" />
              <p>Add New Item</p>
            </button>
          </div>
          <div className="flex flex-col gap-y-3 w-[250px] col-span-3">
            <div className="border-t-4 border-[#CF0000] shadow-lg p-6 rounded-b-md cursor-pointer">
              <h2 className="text-[#CF0000] font-semibold">Cancelled</h2>
            </div>
            {
              cancelledType.map((item, index) => (
                <BoardCard item={item} key={index} />

              ))
            }
            <button className="flex items-center gap-x-2 shadow-lg border p-3 rounded-md">
              <FaPlus className="size-6" />
              <p>Add New Item</p>
            </button>
          </div>
        </div>

      }{
        dataMode === 'table' && <RedeemAndExchangeTable />
      }
    </section>
  )
}

export default RedeemsAndExchanges