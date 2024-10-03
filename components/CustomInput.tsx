'use client'

import React, { useState } from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { IoEye } from "react-icons/io5";


type TFormInput = {
    control: any,
    name: string,
    label?: string,
    placeholder: string,
    type?: string,
    className?: string,
}

const CustomInput = ({ control, name, label, placeholder, type = 'text', className="border-b border-gray-300 focus:outline-none focus:border-b-2 focus:border-primary w-full p-2" }: TFormInput) => {
    const [passwordType, setPasswordType] = useState('password');
    const handleTypeChange = (payload:string) => {
        setPasswordType((value)=>value==='password'?'text':'password');
    }
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <div className='py-2'>
                        <FormControl>
                            <div className='relative'>
                                <input
                                    className={className}
                                    type={type === passwordType ? 'password' : 'text'}
                                    placeholder={placeholder}
                                    {...field}
                                />
                                {
                                    type === 'password' && <IoEye onClick={()=>handleTypeChange('text')} className='absolute top-[30%] right-0 size-5 cursor-pointer' />
                                }

                            </div>
                        </FormControl>
                        <FormMessage className='mt-2' />
                    </div>
                </div>
            )}
        />
    )
}



export default CustomInput