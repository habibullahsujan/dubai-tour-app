'use client'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


const customerListData = [
    { id: '01', userId: 'ID-#10403', name: 'John Doe', email: 'Jhondoe@yahoo.com', memberType: 'Loyalty Member', country: 'Bangladesh', orders: 22, totalSpent: 2020 },
    { id: '01', userId: 'ID-#10403', name: 'John Doe', email: 'Jhondoe@yahoo.com', memberType: 'Repeated Customer', country: 'Bangladesh', orders: 22, totalSpent: 2020 },
    { id: '01', userId: 'ID-#10403', name: 'John Doe', email: 'Jhondoe@yahoo.com', memberType: 'Loyalty Member', country: 'Bangladesh', orders: 22, totalSpent: 2020 },
    { id: '01', userId: 'ID-#10403', name: 'John Doe', email: 'Jhondoe@yahoo.com', memberType: 'Repeated Customer', country: 'Bangladesh', orders: 22, totalSpent: 2020 },
    { id: '01', userId: 'ID-#10403', name: 'John Doe', email: 'Jhondoe@yahoo.com', memberType: 'Loyalty Member', country: 'Bangladesh', orders: 22, totalSpent: 2020 },
]
const CustomersListTable = () => {
    const router=useRouter()
    return (
        <div className='p-2'>
            <Table className='shadow-xl border'>
                <TableHeader>
                    <TableRow className="bg-[#014C4633] text-[#014C46E5] ">
                        <TableHead className="uppercase text-[#014C46E5]">id #</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">users</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">country</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">orders</TableHead>
                        <TableHead className="font-semibold uppercase text-[#014C46E5]">total spent</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='overflow-scroll'>
                    {customerListData.map((item, index) => (
                        <TableRow onClick={()=>router.push(`/dashboard/customers/${item.id}`)} className='cursor-pointer hover:bg-gray-200' key={index}>
                            <TableCell className="font-medium text-xs flex items-center gap-2">
                                {item.userId}
                            </TableCell>
                            <TableCell className="font-medium">
                                <div className='flex items-center gap-2'>
                                    <Image src={'/image-man.svg'} alt='userImg' height={40} width={40} />
                                    <div className='flex flex-col'>
                                        <span className='text-[#686868] text-sm font-bold'>{item.name}</span>
                                        <span className='text-[#686868] text-xs font-bold'>{item.email}</span>
                                        <span className={cn(item.memberType === 'Loyalty Member' && 'text-[#28C76F]',item.memberType === 'Repeated Customer' && 'text-[#F09000]','text-xs')}>{item.memberType}</span>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.country}
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.orders}
                            </TableCell>
                            <TableCell className="font-medium text-xs">
                                {item.totalSpent}
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

export default CustomersListTable