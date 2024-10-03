import {
    Table, TableHeader, TableBody, TableCell,
    TableHead, TableRow
} from '@/components/ui/table'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { SlOptionsVertical } from 'react-icons/sl'

const customerData = [
    { id: '01', customerId: 'ID-#10403', price: 'AE$3,430.00', date: 'August 17, 2024', time: '7:00 AM', service: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', customerId: 'ID-#10403', price: 'AE$3,430.00', date: 'August 17, 2024', time: '7:00 AM', service: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', customerId: 'ID-#10403', price: 'AE$3,430.00', date: 'August 17, 2024', time: '7:00 AM', service: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', customerId: 'ID-#10403', price: 'AE$3,430.00', date: 'August 17, 2024', time: '7:00 AM', service: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', customerId: 'ID-#10403', price: 'AE$3,430.00', date: 'August 17, 2024', time: '7:00 AM', service: 'Private Helicopter Tour Dubai', status: 'received' },
]
const CustomerTable = () => {
    return (
        <div className='p-2'>
            <Table className='shadow-xl border'>
                <TableHeader>
                    <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
                        <TableHead className="uppercase text-[#014C46E5]">id #</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">price</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">date</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">product</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">status</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='overflow-scroll'>
                    {customerData.map((item, index) => (
                        <TableRow className='cursor-pointer hover:bg-gray-200' key={index}>
                            <TableCell className="font-medium text-xs flex items-center gap-2">
                                {item.customerId}
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.price}
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                <div className='flex flex-col gap-2'>
                                    <span>{item.date}</span>
                                    <span>{item.time}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.service}
                            </TableCell>
                            <TableCell className="font-medium text-xs capitalize">
                                {item.status}
                            </TableCell>
                            <TableCell className="font-medium text-xs flex justify-end">
                                <button  className="flex justify-end cursor-pointer">
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
    )
}

export default CustomerTable