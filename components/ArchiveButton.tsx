import React from 'react'
import { Button } from './ui/button'
import { BsDownload } from 'react-icons/bs'

const ArchiveButton = () => {
    return (
        <div className='flex justify-end mt-10'>
            <Button type='submit' className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><BsDownload className='size-6' />Archive</Button>
        </div>
    )
}

export default ArchiveButton