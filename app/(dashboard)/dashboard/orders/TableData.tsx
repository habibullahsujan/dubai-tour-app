import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SlOptionsVertical } from 'react-icons/sl';


const orders = [
    { id: '01', orderId: 'ID-999999', date: 'August 17, 2024', time: '7:00 AM', email: 'dayna19@yahoo.com', customerType: 'loyalty member', price: 'AE$ 548.00', orderType: 'E-Voucher', product: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', orderId: 'ID-999999', date: 'August 17, 2024', time: '7:00 AM', email: 'dayna19@yahoo.com', customerType: 'loyalty member', price: 'AE$ 548.00', orderType: 'E-Voucher', product: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', orderId: 'ID-999999', date: 'August 17, 2024', time: '7:00 AM', email: 'dayna19@yahoo.com', customerType: 'loyalty member', price: 'AE$ 548.00', orderType: 'Physical', product: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', orderId: 'ID-999999', date: 'August 17, 2024', time: '7:00 AM', email: 'dayna19@yahoo.com', customerType: 'loyalty member', price: 'AE$ 548.00', orderType: 'Physical', product: 'Private Helicopter Tour Dubai', status: 'received' },
    { id: '01', orderId: 'ID-999999', date: 'August 17, 2024', time: '7:00 AM', email: 'dayna19@yahoo.com', customerType: 'loyalty member', price: 'AE$ 548.00', orderType: 'E-Voucher', product: 'Private Helicopter Tour Dubai', status: 'received' },
]

const TableData = () => {
    return (
        <div>
            <Table className='shadow-xl border'>
                <TableHeader>
                    <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
                        <TableHead className="w-[100px] uppercase text-[#014C46E5]">Order id</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">date</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">customer</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">price</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">type</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">product</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">status</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium text-nowrap">
                                <div>
                                    <Link href={`/dashboard/orders/${item.id}`}>{item.orderId}</Link>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">
                                <div className='flex flex-col flex-1 text-nowrap'>
                                    <span className="text-sm flex-1">{item.date}</span>
                                    <span className="text-sm">{item.time}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium flex flex-col gap-1">
                                <div className="flex flex-col bg-[#316AC129] text-[#316AC1] px-2 py-1 rounded-md text-center">
                                    <span>{item.email}</span>
                                </div>
                                <div className={cn(item.customerType === 'loyalty member' && 'text-[#28C76F]')}>
                                    <span>{item.customerType}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-xs text-nowrap">
                                {item.price}
                            </TableCell>
                            <TableCell className="font-medium text-nowrap">
                                <span className={cn('px-2 py-1 rounded-md text-xs',
                                    item.orderType === 'E-Voucher' && 'bg-[#68686829] text-[#686868]',
                                    item.orderType === 'Physical' && 'text-[#28C76F] bg-[#28C76F29]')
                                }

                                >{item.orderType}</span>
                            </TableCell>
                            <TableCell className="font-medium text-sm">
                                <div className='flex gap-x-1 items-center'>
                                    <span>{item.product}</span>

                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-sm">
                                <div className='capitalize flex items-center gap-1'>
                                    <div className="w-3 h-3 rounded-full bg-[#2F2B3D]"></div>
                                    <span>{item.status}</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-sm">
                                <div className="flex justify-end cursor-pointer">
                                    <SlOptionsVertical className="size-6" />
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
    )
}

export default TableData