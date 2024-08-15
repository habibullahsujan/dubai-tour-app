import CustomInput from '@/components/CustomInput'
import CustomSelect from '@/components/CustomSelect'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import Image from 'next/image'
import React from 'react'
import { useForm } from 'react-hook-form'
import { FaGreaterThan } from 'react-icons/fa6'
import { IoCheckmarkSharp } from 'react-icons/io5'

const EditUser = () => {
    const form = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <section className='mt-6'>
            <div className='flex items-center justify-center'>
                <h1 className='text-center text-primary font-bold text-lg flex items-center gap-x-1'>Users List <FaGreaterThan />John Doe <FaGreaterThan /> Edit User</h1>
            </div>
            <hr />
            <div>
                <h2>Contact Info</h2>
                <div className='flex items-center justify-center'>
                <Image src={'/image-women.svg'} alt={'profile img'} height={150} width={150} />
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-4 p-3">
                        <div className='p-3 shadow-md rounded-md'>
                            <div >
                                <CustomInput control={form.control} name={'email'} label={'Email'} placeholder={'Email'} type='email' className='border p-2 rounded-md w-full' />
                            </div>
                            <div>
                                <CustomSelect control={form.control} label={'Permissions'} name={'permissions'} />
                            </div>
                            <div >
                                <CustomInput control={form.control} name={'phone'} label={'Phone'} placeholder={'Phone'} type='number' className='border p-2 rounded-md w-full' />
                            </div>
                        </div>

                        <div className='flex justify-end mt-10'>
                            <Button className='border p-2 shadow-sm rounded-md flex gap-x-2' variant={'outline'}><IoCheckmarkSharp className='size-6' />Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    )
}

export default EditUser