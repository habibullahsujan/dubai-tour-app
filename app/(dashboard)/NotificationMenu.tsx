import Image from 'next/image'
import React from 'react'



type TNotificationMenuProps={
    setIsVisible: React.Dispatch<React.SetStateAction<string>>,
}
const NotificationMenu = ({ setIsVisible }:TNotificationMenuProps) => {
    const notificationData = [
        { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', },
        { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', },
        { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', },
        { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', },
        { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', }, { name: 'Cora Marlowe', service: 'Tour Dubai', message: "Can I get a ride on Thursday around 11 o'clock?", profileImg: '/image-women.svg', },

    ]
    return (
        <>
            <div onClick={() => setIsVisible('')} className="absolute inset-0 flex flex-col bg-[#FFFFFF] rounded-lg shadow-lg z-10 h-[504px] w-[300px] top-[65px] left-[63%] p-4">
                <h1 className='text-lg text-primary text-center font-bold'>Notification</h1>
                <div className='bg-gradient-to-r from-[#014C46] via-[#014C46] to-[#014C46] border'></div>
                <div className='overflow-auto'>
                    {notificationData.map((notification, index) => (
                        <div key={index} className='flex items-center justify-between gap-2 shadow-md p-2 rounded-md my-2 border cursor-pointer'>
                            <div className=''>
                                <Image src={notification.profileImg} alt='profile img' height={60} width={60} />
                            </div>
                            <div className='flex flex-col'>
                                <h5 className='font-bold text-sm'>{notification.name}</h5>
                                <span className='text-xs font-semibold'>{notification.service}</span>
                                <p className='text-[10px]'>{notification.message}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex justify-end'>
                    <button className='text-xs font-bold pt-1'>See All</button>
                </div>

            </div>

        </>


    )
}

export default NotificationMenu