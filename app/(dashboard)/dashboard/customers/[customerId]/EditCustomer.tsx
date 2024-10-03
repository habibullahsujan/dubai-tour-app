'use client'
import ArchiveButton from '@/components/ArchiveButton'
import CustomInput from '@/components/CustomInput'
import DeleteButton from '@/components/DeleteButton'
import { Form } from '@/components/ui/form'
import { Edit2Icon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { CiShoppingCart } from 'react-icons/ci'
import { IoMdCall } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'

const EditCustomer = () => {
    const form = useForm();
    const onSubmit = (data: any) => {
        console.log(data)
    }
    return (
        <section className='grid grid-cols-12 mt-28 m-6 gap-4'>
            <div className='col-span-7 flex flex-col gap-3'>
                <div className='flex items-center justify-between gap-2'>
                    <div className='border rounded-md shadow-md flex items-center gap-2 p-2 w-full'>
                        <Image src={'/image-man.svg'} alt='img' height={40} width={40} />
                        <div>
                            <p className='font-bold text-lg text-primary'>Name</p>
                            <p className='text-sm'>John Doe</p>
                        </div>
                    </div>
                    <div className='border rounded-md shadow-md flex items-center gap-2 p-2 w-full'>
                        <div className='bg-[#014C4633] p-1 rounded-md border'>
                            <MdOutlineEmail className='size-6' />
                        </div>
                        <div>
                            <p className='font-bold text-lg text-primary'>Email</p>
                            <p className='text-sm'>habibusujan007@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-2'>
                    <div className='border rounded-md shadow-md flex items-center gap-2 p-2 w-full'>
                        <div className='bg-[#014C4633] p-1 rounded-md border'>
                            <CiShoppingCart className='size-6' />
                        </div>
                        <div>
                            <p className='font-bold text-lg text-primary'>Orders</p>
                            <p className='text-sm'>5000</p>
                        </div>
                    </div><div className='border rounded-md shadow-md flex items-center gap-2 p-2 w-full'>
                        <div className='bg-[#014C4633] p-1 rounded-md border'>
                            <IoMdCall className='size-6' />
                        </div>
                        <div>
                            <p className='font-bold text-lg text-primary'>Contact No</p>
                            <p className='text-sm'>+55 (18) 99739-4816</p>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 border shadow-md rounded-md p-3">
                        <h2 className='font-bold text-primary'>Partner Additional Info</h2>
                            <div className='flex justify-between items-center gap-2'>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="" className='font-bold text-primary'>Name</label>
                                    <CustomInput control={form.control} name={'name'} placeholder={'Name'} type='text' className='border rounded-md  p-2 w-full' />
                                </div>
                                <div className='flex flex-col gap-2 w-full'>
                                    <label htmlFor="" className='font-bold text-primary'>Phone</label>
                                    <CustomInput control={form.control} name={'phone'} placeholder={'Phone'} type='number' className='border rounded-md  p-2 w-full'  />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='font-bold text-primary'>Email</label>
                                    <CustomInput control={form.control} name={'email'} placeholder={'Email'} type='email' className='border rounded-md p-2 w-1/2'  />
                                </div>
                        </form>
                        <div className='flex items-center justify-end gap-3'>
                            <ArchiveButton/>
                            <DeleteButton/>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="col-span-5  border rounded-md shadow-md p-2 h-[188px]">
                <div className='flex justify-between items-center my-1'>
                    <p className='font-bold text-lg text-primary'>Shipping Info</p>
                    <Edit2Icon className='size-6' />
                </div>
                <div>
                    <p className='text-sm'><span className='font-bold text-primary text-base'>Address</span> PO Box 944881, Meadows 8 - Street 2 Villa 15</p>
                    <p><span className='font-bold text-primary'>City</span> Dubai</p>
                    <p><span className='font-bold text-primary'>Country</span> Arab Emirates</p>
                    <p><span className='font-bold text-primary'>Package Type</span> Gift Envelope</p>
                    <p><span className='font-bold text-primary'>Shipping Option</span> Standard Shipping</p>
                </div>
            </div>
        </section>
    )
}

export default EditCustomer