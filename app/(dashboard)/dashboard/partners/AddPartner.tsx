'use client'
import CustomInput from '@/components/CustomInput'
import CustomSelect from '@/components/CustomSelect'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { PlusIcon } from 'lucide-react'
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { BsDownload } from 'react-icons/bs'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { RxCross2 } from 'react-icons/rx'

const AddPartner = () => {
    const form = useForm();
    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }

    return (
        <section className='mt-28'>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-8'>
                    {/* partner additional info */}
                    <div className='flex flex-col gap-5'>
                        <div className='shadow-md rounded-md p-2'>
                            <h2 className='font-bold text-primary my-4'>Partner Additional Info</h2>
                            <div className='grid grid-cols-12 gap-3'>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>Name</label>
                                    <input type="text" placeholder='Name' className='border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>Phone</label>
                                    <input type="number" placeholder='Phone' className='border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>Email</label>
                                    <input type="email" placeholder='Email' className='border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>Website</label>
                                    <input type="text" placeholder='Website' className='border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>POC Email</label>
                                    <input type="text" placeholder='POC Email' className='border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2 col-span-6'>
                                    <label htmlFor="" className='font-bold text-primary text-sm'>POC Phone</label>
                                    <input type="text" placeholder='POC Phone' className='border rounded-md p-2' />
                                </div>
                            </div>
                        </div>
                        <div className='shadow-md rounded-md p-2'>
                            {/* redeem info */}
                            <h2 className='font-bold text-primary'>Redeem Info</h2>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="" className='font-bold text-primary text-sm'>Redeem Steps</label>
                                <textarea id="" className='flex-1 border h-[100px] rounded-md p-2' placeholder='Steps...'></textarea>
                                <div className='flex items-center justify-end gap-3 py-9'>
                                    <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><BsDownload className='size-6' />Archive</Button>
                                    <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><RxCross2 className='size-6' />Delete</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-4 border shadow-md rounded-md p-2 h-[500px]'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} >
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold text-primary my-2'>Product Status</label>
                                <CustomSelect name='product Status' control={form.control} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold text-primary my-2'>Product Type</label>
                                <CustomSelect name='productType' control={form.control} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold text-primary my-2'>Partners</label>
                                <CustomSelect name='product Status' control={form.control} />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="" className='font-bold text-primary my-2'>Field Types</label>
                                <CustomSelect name='product Status' control={form.control} />
                            </div>
                            <div className='flex gap-x-1 items-end'>
                                <div className='flex flex-col flex-1'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Tags</label>
                                    <input type="text" className='border p-1 rounded-md w-full' placeholder='Type...' />
                                </div>
                                <PlusIcon className='size-8 border rounded-md p-2' />
                            </div>
                            <div className='flex gap-x-4 items-center justify-end mt-4'>
                                <button className="flex items-center gap-x-2 border p-3 rounded-md">
                                    <IoCheckmarkSharp className="size-6" />
                                    <p>Submit</p>
                                </button>
                            </div>
                        </form>
                    </Form>

                </div>

            </div>

        </section>
    )
}

export default AddPartner