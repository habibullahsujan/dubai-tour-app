import React from 'react'
import { Button } from './ui/button'
import { RxCross2 } from 'react-icons/rx'

const DeleteButton = () => {
    return (
        <div className='flex justify-end mt-10'>
            <Button type='submit' className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><RxCross2 className='size-6' />Delete</Button>
        </div>
    )
}

export default DeleteButton