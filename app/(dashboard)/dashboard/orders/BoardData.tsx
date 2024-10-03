import BoardCard from '@/components/BoardCard';
import React, { useState } from 'react'
import { FaCarSide, FaPlus } from 'react-icons/fa6';
import { GiHelicopter } from 'react-icons/gi';

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
      type: 'allVouchersSent', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }]
      , icon: <GiHelicopter className="size-8" />

    },
    {
      orderId: '#OrderID-999999',
      id: '04',
      type: 'allVouchersSent', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }]
      , icon: <GiHelicopter className="size-8" />

    },
    { orderId: '#OrderID-999999', id: '05', type: 'refund', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Processing', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> }
    ,
    { orderId: '#OrderID-999999', id: '06', type: 'refund', title: 'Texi Tour', description: 'Rented texi Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <FaCarSide className="size-8" /> },
    { orderId: '#OrderID-999999', id: '07', type: 'refund', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Default', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> },
    { orderId: '#OrderID-999999', id: '08', type: 'cancelled', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Staycation', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> },
    { orderId: '#OrderID-999999', id: '09', type: 'cancelled', title: 'Helicopter Tour', description: 'Private Helicopter Tour Dubai', status: 'Collection', dateTime: 'August 17, 2024 | 7:00 AM', comments: [{ userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' }, { userId: "", comment: '' },], users: [{ userId: '', img: '' }, { userId: '', img: '' }], icon: <GiHelicopter className="size-8" /> }
  ]

const BoardData = () => {
    const receivedType = redeemsAndExchanges.filter(item => item.type === 'received');
    const allVouchersSent = redeemsAndExchanges.filter(item => item.type === 'allVouchersSent');
    const refundType = redeemsAndExchanges.filter(item => item.type === 'refund');
    const cancelledType = redeemsAndExchanges.filter(item => item.type === 'cancelled');

    return (
        <section className="">
             <div className="mt-8 grid grid-cols-12 gap-4 justify-items-center">
                    <div className="flex flex-col gap-y-3 col-span-3 w-[250px]">
                        <div className="border-t-4 border-[#CF0000] shadow-lg p-6 rounded-b-md">
                            <h2 className="text-[#CF0000] font-semibold">Received</h2>
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
                            <h2 className="text-[#F09000] font-semibold">All Vouchers Sent</h2>
                        </div>
                        {
                            allVouchersSent.map((item, index) => (
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
                            <h2 className="text-[#005928] font-semibold">Refund</h2>
                        </div>
                        {
                            refundType.map((item, index) => (
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
        </section>
    )
}

export default BoardData