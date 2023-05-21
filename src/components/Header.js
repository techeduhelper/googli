"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuGridO } from 'react-icons/cg'

const Header = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    };

   
    return (
        <div className='flex justify-end p-5 text-sm items-center text-center space-x-4'>
            <Link href={`https://mail.google.com`} className='hover:underline font-medium'>Gmail</Link>
            <Link href={`https://images.google.com`} className='hover:underline font-medium'>Images</Link>
            <CgMenuGridO onClick={handleOpen} className='bg-transparent text-4xl p-2 hover:bg-gray-200 rounded-full cursor-pointer' />
            <Link href={`https://myaccount.google.com/`} ><button className='bg-blue-600 p-2 px-3 mr-2 hover:brightness-75 rounded-md text-white'>Sign in</button>
            </Link>
        </div>
    )
}

export default Header