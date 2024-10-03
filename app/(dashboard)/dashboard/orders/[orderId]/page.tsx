'use client'
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import { redeemsAndExchangesTable } from '@/db';
import { cn } from '@/lib/utils';
import { Kaushan_Script } from 'next/font/google';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import { AiOutlineShopping } from 'react-icons/ai';
import { FaRegEdit } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';
import { IoIosGift } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { TbPhoneCalling } from 'react-icons/tb';
import { BookingStatusSelect } from '../../redeems-and-exchanges/[orderId]/BookingStatusSelect';
import { Button } from '@/components/ui/button';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { BsDownload } from 'react-icons/bs';
import { RxCross2, RxLoop } from 'react-icons/rx';
import { CiCalendarDate } from 'react-icons/ci';
const kaushanScript = Kaushan_Script({ subsets: ["latin"], weight: '400' });

const SingleOrderPage = () => {
    const params = useParams();
    const order = redeemsAndExchangesTable.find((item) => item.id === params.orderId);

    const progressData = [
        { progress: 'Processing', message: 'Order was selected to process by...Order was selected to process by...Order was selected to process by...', dateTime: 'Tuesday 11:29 AM', complete: true },
        { progress: 'All Sent', message: 'Order was booked by...', dateTime: 'Wednesday 11:29 AM', complete: true },
        { progress: 'Complete', message: 'The customer X has enjoyed the Experience', dateTime: 'Tuesday 11:29 AM', complete: false },
    ]

    const messageData = [{ userImg: '/image-women.svg', userName: 'Cora Marlowe', time: 'Jul 24', message: 'Redeem created manually due to technical error' }, { userImg: '/image-women.svg', userName: 'Lukas Krejca', time: '7m', message: 'Waiting for Gigi to decide on exchange as this experience is unavailable till October' }, { userImg: '/image-women.svg', userName: 'Cora Marlowe', time: 'Jul 24', message: 'Redeem created manually due to technical error' },]
    return (
        <section className='pr-3 mt-16'>
            <div>
                <h2 className='font-bold text-primary text-lg py-6'>Redeems & Exchanges - {order?.orderId}</h2>
                <div className=" gap-x-4 grid grid-cols-12 gap-6">
                    <div className="border rounded-md shadow-md col-span-8 relative h-[274px]">
                        <div className='flex'>
                            <div>
                                <div className='relative'>
                                    <h1 className={cn(kaushanScript.className, 'font-bold text-4xl pt-6 text-primary')}>Voucher</h1>
                                    <span className={cn('absolute top-4 left-24 text-[#FFB849]', kaushanScript.className)}>Details</span>
                                </div>
                                <div className='p-6'>
                                    <h2 className='font-bold text-lg '>Helicopter Ride</h2>
                                    <p><span className='text-primary font-bold'>City:</span> Dubai</p>
                                    <p> <span className='text-primary font-bold'>Country:</span> Arab Emirates</p>
                                    <p><span className='text-primary font-bold'>Package Type:</span> Gift Envelop</p>
                                    <p><span className='text-primary font-bold'>Shipping Option:</span> Standard Shipping</p>
                                    <p> <span className='text-primary font-bold'>Expiry Date:</span> December 25, 2025</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className="w-72 h-36 rounded-b-full overflow-hidden">
                                    <Image src={'/svg/helicopter.svg'} alt='helicopter' height={350} width={452} className='w-full h-full object-cover' />

                                    <div className='absolute'>
                                        <Image src={'/svg/flower.svg'} alt='flower' height={100} width={100} />
                                        <div className={cn('absolute top-[20%] right-[25%] flex  flex-col items-center justify-center text-[#FFB849] text-sm', kaushanScript.className)}>
                                            <span>Ride</span>
                                            <span>$274,00</span>
                                            <span>Only</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='absolute bottom-4 right-[10%]'>
                                    <Image src={'/svg/qr-code.svg'} alt='flower' height={50} width={50} />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex gap-2 items-center justify-center bg-[#0D062D] text-white py-0.5 rounded-b-md'>
                                <FaLocationArrow />
                                <span>PO Box 944881, Meadows 8 - Street 2 Villa 15</span>
                            </div>
                        </div>
                        <div className='z-10 absolute -bottom-4 left-0 rounded-b-lg'>
                            <Image src={'/svg/design-1.svg'} alt='helicopter' height={75} width={54} />
                        </div>
                        <div className='z-10 absolute -bottom-4 left-0 rounded-b-lg'>
                            <Image src={'/svg/voucher-design-1.svg'} alt='helicopter' height={75} width={54} />
                        </div>
                    </div>
                    <div className="col-span-4 flex flex-col justify-between gap-y-2">
                        <div className='border shadow-md p-1 flex items-center gap-x-4 rounded-md'>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'>                                <AiOutlineShopping className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Order Status</h5>
                                <span>2,000</span>
                            </div>
                        </div>
                        <div className='border shadow-md p-1 flex items-center gap-x-4 rounded-md'>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'><CiCalendarDate className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Order Created Date</h5>
                                <span>1,000</span>
                            </div>
                        </div>
                        <div className='border shadow-md p-1 flex items-center gap-x-4 rounded-md'>
                            <div className='bg-[#014C4633] p-1 rounded-md text-primary'><IoIosGift className='size-8' />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-lg text-primary'>Total Redeem</h5>
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
                    </div>
                    <div className='col-span-8 shadow-lg rounded-md border p-2 grid grid-cols-12'>
                        <div className='flex flex-col mr-4 col-span-6'>
                            {
                                progressData.map((item, index) => (
                                    <div className='flex' key={index}>
                                        <div className='flex flex-col items-center justify-start pr-4'>
                                            <div className={cn("w-6 h-6 rounded-full mb-1",
                                                item.progress === 'Processing' && item.complete === true ? 'bg-[#28C76F] border-none ' : 'p-1',
                                                item.progress === 'Booked' && item.complete === true ? 'bg-[#316AC1] border-none ' : 'p-1',
                                                item.progress === 'All Sent' && item.complete === true ? 'bg-[#316AC1] border-none ' : 'p-1 border-2 border-primary',
                                                item.progress === 'Complete' && item.complete === true ? 'bg-[#014C46] border-none ' : 'p-1 border-2 border-primary'
                                            )}></div>
                                            <div className="w-px h-full bg-[#014C46] mb-1 p-[1px]"></div>
                                        </div>
                                        <div>
                                            <p className='font-bold text-primary text-base'>{item.progress}</p>
                                            <span className='text-xs'>{item.message}</span>
                                        </div>
                                        <p className='text-xs text-nowrap'>{item.dateTime}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex flex-col w-full col-span-6'>
                            {
                                messageData.map((message, index) => (
                                    <div className='flex gap-2 shadow-sm rounded-md p-1 my-2' key={index}>
                                        <div className=''>
                                            <Image src={'/image-women.svg'} height={40} width={40} alt='profile img' className='' />
                                        </div>
                                        <div className='leading-tight flex flex-col w-5/6'>
                                            <p><span className='font-bold text-primary text-sm'>{message.userName}</span>  <span className='text-[10px] text-nowrap text-[#494949]'>{message.time}</span></p>
                                            <span className='text-[10px] h-full'>{message.message} </span>
                                        </div>
                                    </div>
                                ))
                            }
                            <div className='flex gap-x-2 items-center'>
                                <Image src={'/image-man.svg'} alt='profile' height={40} width={40} />
                                <div>
                                    <input
                                        placeholder='Add a comment'
                                        className="text-sm border-gray-300 focus:outline-none focus:border-b-2 focus:border-primary border-b"
                                        type='text'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='border p-4 rounded-md h-[229px]'>
                            <h1 className='font-bold text-lg text-primary'>Redeem Activity</h1>
                            <form action="" className='mt-5 flex flex-col gap-y-4'>
                                <div className='flex flex-col'>
                                    <label htmlFor="">Order Status</label>
                                    <input type="text" name="orderStatus" id="" className='border rounded-md' placeholder='Type...' />
                                </div>
                                <div className='flex  flex-col gap-2'>
                                    <label htmlFor="">Booking Status</label>
                                    <BookingStatusSelect />
                                </div>
                            </form>
                        </div>
                        <div className='flex justify-end mt-10'>
                            <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><IoCheckmarkSharp className='size-6' />Submit</Button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-5 mb-10 items-center justify-center'>
                    <div className='flex justify-end mt-10'>
                        <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><RxLoop className='size-6' />Exchange</Button>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><HiOutlineArrowUturnLeft className='size-6' />Refund</Button>
                    </div>
                    <div className='flex justify-end mt-10'>
                        <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><RxCross2 className='size-6' />Cancel</Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SingleOrderPage