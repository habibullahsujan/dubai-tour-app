'use client'
import CustomSignInForm from '@/components/CustomSignInForm'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { FieldValues } from 'react-hook-form';
import { FcGoogle } from "react-icons/fc";



const SignInPage = () => {
    const onSubmit = (data:FieldValues) => {
        console.log(data)
    }

    return (
        <section className="flex items-center justify-between gap-6">
            <div className='h-[100vh] flex-1 relative w-full'>
                <Image src={'/images/sign-up-page-img.png'} className='form-img object-cover' alt='sign in page banner' fill />
            </div>
            <div className='px-20'>
                <div className='mb-6'>
                    <h1 className='flex flex-col items-center gap-y-1 text-2xl font-bold text-textPrimary'>Welcome To <span className='text-primary text-4xl'>TOUR DUBAI</span></h1>
                </div>
                <div className='pb-3'>
                    <p className='flex flex-col items-center gap-y-1'>Please log n to your account and start a  <span className='text-primary font-bold'>“New Journey”.</span></p>
                </div>
                <div>
                    <CustomSignInForm onSubmit={onSubmit} />
                    <div className="flex items-center justify-center py-4">
                        <div className="border-t border-[#0D062D] flex-grow"></div>
                        <span className="mx-2 font-bold text-textPrimary">Or</span>
                        <div className="border-t border-[#0D062D]  flex-grow"></div>
                    </div>
                    <div className='pb-4 flex items-center justify-center'>
                        <Button variant={'outline'} className='w-full border-primary text-textPrimary'><FcGoogle className='size-6 mr-2' /> Log in with Google</Button>
                    </div>
                </div>

                <div></div>
            </div>
        </section>
    )
}

export default SignInPage