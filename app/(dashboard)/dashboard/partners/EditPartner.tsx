import React from 'react'
import { Edit2, PlusIcon } from 'lucide-react'
import { AiOutlineShopping } from 'react-icons/ai'
import { FaRegEdit } from 'react-icons/fa'
import { FaGreaterThan } from 'react-icons/fa6'
import { IoIosGift } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import { TbPhoneCalling } from 'react-icons/tb'
import { IoCheckmarkSharp, IoLink } from "react-icons/io5";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { CiMemoPad } from "react-icons/ci";
import { Button } from '@/components/ui/button'
import { BsDownload } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'


const EditPartner = () => {

    return (
        <section className='mt-28 p-4'>
            <div className='flex items-center mb-6'>
                <h1 className=' text-primary font-bold text-lg flex items-center gap-x-1'>Partners List <FaGreaterThan /> Big Red DXB <FaGreaterThan /> Edit</h1>
            </div>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-8 flex flex-col gap-y-8 justify-start h-[400px]'>
                    <div className='border shadow-md rounded-md p-4'>
                        <div className='flex items-center justify-between pt-4 pb-3'>
                            <h1 className='text-primary font-bold text-lg'>Payment Info</h1>
                            <Edit2 className='size-6' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p><span className='font-bold text-primary'>Address</span> PO Box 944881, Meadows 8 - Street 2 Villa 15</p>
                            <p><span className='font-bold text-primary'>City </span>Dubai</p>
                            <p><span className='font-bold text-primary'>Country </span> Arab Emirates</p>
                            <p><span className='font-bold text-primary'>Package Type </span> Gift Envelope</p>
                            <p><span className='font-bold text-primary'>Shipping Option</span> Standard Shipping</p>
                        </div>
                    </div>
                    <div className='border rounded-md shadow-md p-4'>
                        <h1 className='my-3 font-bold text-primary'>Partner Additional Info</h1>
                        <div className='grid grid-cols-12 gap-2'>
                            <div className='col-span-6'>
                                <div className='flex gap-x-1 items-end'>
                                    <div className='flex flex-col flex-1'>
                                        <label htmlFor="" className='text-primary font-bold my-2'>Tags</label>
                                        <input type="text" className='border p-1 rounded-md shadow-md w-full' placeholder='Type...' />
                                    </div>
                                    <PlusIcon className='size-8 border rounded-md shadow-md p-2' />
                                </div>
                                <div className='flex flex-col my-3'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Booking Type</label>
                                    <input type="text" className='border p-1 rounded-md shadow-md' placeholder='Type...' />
                                </div>
                                <div className='flex flex-col my-3'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Payments Terms</label>
                                    <input type="text" className='border p-1 rounded-md shadow-md' placeholder='Type...' />
                                </div>
                            </div>
                            <div className='col-span-6 h-full w-full'>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Redeem Steps</label>
                                    <textarea id="" className='w-full border h-[100px] rounded-md p-2' placeholder='Steps...'></textarea>
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label htmlFor="" className='text-primary font-bold my-2'>Notes</label>
                                    <textarea name="" id="" className='w-full border h-[100px] rounded-md p-2' placeholder='Types...'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-center justify-end mt-4'>
                            <button className="flex items-center gap-x-2 shadow-lg border p-3 rounded-md">
                                <IoCheckmarkSharp className="size-6" />
                                <p>Submit</p>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 py-9'>
                        <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><BsDownload className='size-6' />Archive</Button>
                        <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><RxCross2 className='size-6' />Delete</Button>
                    </div>
                </div>
                <div className="col-span-4 flex flex-col justify-between gap-y-2">
                    <div className='border shadow-md p-1 flex items-center gap-x-4 rounded-md'>
                        <div className='bg-[#014C4633] p-1 rounded-md text-primary'>                                <AiOutlineShopping className='size-8' />
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='font-bold text-lg text-primary'>Total Orders</h5>
                            <span>2,000</span>
                        </div>
                    </div>
                    <div className='border shadow-md p-1 flex items-center gap-x-4 rounded-md'>
                        <div className='bg-[#014C4633] p-1 rounded-md text-primary'><IoIosGift className='size-8' />
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='font-bold text-lg text-primary'>Total Orders</h5>
                            <span>1,000</span>
                        </div>
                    </div>
                    <div className='flex justify-between items-center rounded-md border shadow-md p-2'>
                        <div className=' flex justify-between items-center gap-x-4 '>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>
                                <MdEmail className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Email</h5>
                                <span>rafael@fachiniit.com</span>
                            </div>
                        </div>
                        <FaRegEdit className='size-6' />
                    </div>
                    <div className='flex justify-between items-center rounded-md border shadow-md p-2'>
                        <div className=' flex justify-between items-center gap-x-4 '>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>
                                <TbPhoneCalling className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Contact No</h5>
                                <span>+55 (18) 99739-4816</span>
                            </div>
                        </div>
                        <FaRegEdit className='size-6' />
                    </div>
                    <div className='flex justify-between items-center rounded-md border shadow-md p-2'>
                        <div className=' flex justify-between items-center gap-x-4 '>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>
                                <CiMemoPad className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Fee</h5>
                                <span>25%</span>
                            </div>
                        </div>
                        <FaRegEdit className='size-6' />
                    </div>
                    <div className='flex justify-between items-center rounded-md border shadow-md p-2'>
                        <div className=' flex justify-between items-center gap-x-4 '>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>
                                <MdOutlinePermContactCalendar className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Poc Contact</h5>
                                <span>rafael@fachiniit.com</span>
                            </div>
                        </div>
                        <FaRegEdit className='size-6' />
                    </div>
                    <div className='flex justify-between items-center rounded-md border shadow-md p-2'>
                        <div className=' flex justify-between items-center gap-x-4 '>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>
                                <IoLink className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Website</h5>
                                <span>
                                    https://streetmaniax.com/</span>
                            </div>
                        </div>
                        <FaRegEdit className='size-6' />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default EditPartner