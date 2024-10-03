import { cn } from '@/lib/utils'
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import { LiaCommentDots } from "react-icons/lia";


type TComment = {
  userId: string, comment: string
}
type TUser = {
  userId: string, img: string
}
type TItemProps = {
  orderId: string,
  id:string,
  type: string,
  title: string,
  description: string,
  status: string,
  dateTime: string,
  comments: TComment[],
  users: TUser[],
  icon: ReactNode
}

const BoardCard = ({ item }: { item: TItemProps }) => {
  return (
    <Link  href={`/dashboard/redeems-and-exchanges/${item.id}`}  className="shadow-xl rounded-md mt-8 p-4 relative w-full border">
      <div className="absolute -top-4 right-[30%]">
        <p className="border rounded-md bg-[#014C4633] border-primary p-0.5 text-primary text-center">{item.orderId}</p>
      </div>
      <div className="flex items-center gap-x-2 mt-6">
        {item.icon}
        <p className='text-sm font-bold text-primary text-nowrap'>{item.title}</p>
      </div>
      <p className='text-sm'>{item.description}</p>
      <div className="flex justify-between items-center my-2">
        <span className={cn(item.status === 'Default' && "text-[#686868] bg-[#68686829]", 'border rounded-sm text-sm cursor-pointer p-0.5', item.status === 'Processing' && 'text-[#28C76F] bg-[#28C76F29]', item.status === 'Staycation' && 'bg-[#AB329729] text-[#AB3297]', item.status === 'Collection' && 'bg-[#316AC129] text-[#316AC1]')}>{item.status}</span>
        <div className='flex'>
          <Image className='-mr-2 z-10' src={'/image-women.svg'} alt='logo' height={35} width={35} />
          <Image src={'/image-man.svg'} alt='logo' height={35} width={35} />

        </div>
      </div>
      <div className="border-b-2 border-gray-300"></div>
      <div className="flex items-center justify-between mt-2">
        <span className='text-xs text-nowrap border rounded-md p-1'>{item.dateTime}</span>
        <div className='flex items-center justify-center'>
          <LiaCommentDots className='h-4' />
          <span className='text-xs font-bold'>12</span>
        </div>
      </div>
    </Link>
  )
}

export default BoardCard