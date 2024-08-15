
'use client'

import React from 'react'
import { Form } from './ui/form'
import { useForm } from 'react-hook-form'
import CustomInput from './CustomInput'
import { Button } from './ui/button'

const CustomSignInForm = ({ onSubmit }) => {
  const form = useForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomInput control={form.control} name={'email'} label={'Email'} placeholder={'Email'} type='email' />
        <CustomInput control={form.control} name={'password'} label={'Password'} placeholder={'Password'} type='password' />
        <Button className='w-full text-white font-bold py-6' type='submit'>Log in</Button>
      </form>
    </Form>
  )
}

export default CustomSignInForm