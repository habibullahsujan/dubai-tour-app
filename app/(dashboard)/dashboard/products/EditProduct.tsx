'use client'
import ArchiveButton from '@/components/ArchiveButton';
import CustomInput from '@/components/CustomInput';
import CustomSelect from '@/components/CustomSelect';
import DeleteButton from '@/components/DeleteButton';
import GradientHorizontalLine from '@/components/GradientHorizontalLine';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { PlusIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
import { FieldValues, useForm } from 'react-hook-form';
import { FaGreaterThan } from "react-icons/fa6";
import { GiPriceTag } from 'react-icons/gi';
import { IoCheckmarkSharp, IoLink } from 'react-icons/io5';

const EditProduct = () => {
    const form = useForm()
    const onSubmit = (data: FieldValues) => {
        console.log(data)
    }
    return (
        <section className=''>
            <div className='w-[400px] shadow-md rounded-md p-4 mx-auto'>
                <h1 className='flex items-center gap-1 text-primary font-bold text-center justify-center'>Products List <FaGreaterThan /> Gentleman&apos;s... <FaGreaterThan /> Edit</h1>
                <GradientHorizontalLine/>
                <div className='flex flex-col gap-y-2'>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <Image src={'/svg/category-icon.svg'} alt='icon' height={40} width={40} />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>Category</h2>
                            <span>SPA</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <Image src={'/svg/partner.svg'} alt='icon' height={40} width={40} />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>Partners</h2>
                            <span>Anantara Downtown Hotel</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <GiPriceTag className='size-10 text-primary' />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>Price</h2>
                            <span>AE$ 899.00</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <IoLink className='size-10 text-primary' />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>Url</h2>
                            <span>ithara.ae/gentlemen-s-retreat...</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <Image src={'/svg/voucher.svg'} alt='icon' height={40} width={40} />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>E Voucher</h2>
                            <span>canva.com/des...Q/edit</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 border rounded-md p-1 shadow-md'>
                        <div className='bg-[#014C4633] p-0.5 rounded-lg'>
                            <Image src={'/svg/variant.svg'} alt='icon' height={40} width={40} />
                        </div>
                        <div>
                            <h2 className='font-bold text-primary'>Variant</h2>

                        </div>
                    </div>

                </div>
                <div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 ">
                            <div className='p-3 shadow-md rounded-md border'>
                                <h3 className='font-bold text-primary text-center mt-6'>Product Info</h3>
                                <div className='p-3 flex flex-col gap-2'>
                                    <div>
                                        <label className='font-bold text-primary mb-2'>Product Status</label>
                                        <CustomSelect control={form.control} name={'productStatus'} />
                                    </div>
                                    <div>
                                        <label className='font-bold text-primary mb-2'>Product Type</label>
                                        <CustomSelect control={form.control} name={'productType'} />
                                    </div>
                                    <div>
                                        <label className='font-bold text-primary mb-2'>Partners</label>
                                        <CustomSelect control={form.control} name={'partners'} />
                                    </div>
                                </div>
                                <div className='flex justify-end mt-10'>
                                    <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><IoCheckmarkSharp className='size-6' />Submit</Button>
                                </div>
                            </div>
                            <div className='p-3 shadow-md rounded-md border'>
                                <h3 className='text-primary font-bold text-center'>Product Variants</h3>
                                <div className='flex gap-x-1 items-end'>
                                    <div className='flex flex-col flex-1'>
                                        <label htmlFor="" className='text-primary font-bold my-2'>Variant Name</label>
                                        <CustomSelect control={form.control} name='variantName' />
                                    </div>
                                    <PlusIcon className='size-10 border rounded-md p-2' />
                                </div>
                                <div>
                                    <label htmlFor="type" className='font-bold text-primary'>Type</label>
                                    <CustomInput placeholder='Type...' name='type' control={form.control} className='border w-full p-2 rounded-md' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="type" className='font-bold text-primary'>Description</label>
                                    <textarea {...form.control} className='rounded-md border h-[95px] w-full p-2' placeholder='Description' />
                                </div>
                            </div>
                            <div className='p-3 shadow-md rounded-md border'>
                                <h3 className='text-primary font-bold text-center'>Booking Fields</h3>
                                <div className='flex gap-x-1 items-end'>
                                    <div className='flex flex-col flex-1'>
                                        <label htmlFor="" className='text-primary font-bold my-2'>Field Name</label>
                                        <CustomSelect control={form.control} name='fieldName' />
                                    </div>
                                    <PlusIcon className='size-10 border rounded-md p-2' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Field Type</label>
                                    <CustomSelect control={form.control} name='fieldType' />
                                </div>
                            </div>
                            <div className='flex items-center gap-3 justify-end'>
                                <ArchiveButton/>
                                <DeleteButton/>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
}

export default EditProduct