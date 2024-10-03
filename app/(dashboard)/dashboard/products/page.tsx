'use client'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { BsMenuButton } from 'react-icons/bs'
import { CiExport } from 'react-icons/ci'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoSearch } from 'react-icons/io5'
import { TbFilterEdit } from 'react-icons/tb'
import ProductsTable from './ProductsTable'
import EditProduct from './EditProduct'


const Products = () => {
    const [open, setOpen] = useState(false)
    const editProductHandler=()=>{
        setOpen(true)
    }

    return (
        <section className='relative' onClick={() => setOpen(false)}>
            <div className={cn(open && 'blur-sm  bg-[#00000066]')}>
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
                <ProductsTable open={open} setOpen={editProductHandler} />
            </div>
            {open &&
                <div className='absolute -top-8 right-6 overflow-y-scroll overflow-x-hidden mt-28 bg-white rounded-md h-screen'>

                    <EditProduct />
                </div>

            }

        </section>
    )
}

export default Products