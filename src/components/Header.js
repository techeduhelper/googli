import Link from 'next/link'
import React from 'react'
import { CgMenuGridO } from 'react-icons/cg'

const Header = () => {
    return (
        <div className='flex justify-end p-5 text-sm items-center text-center space-x-4'>
            <Link href={`https://mail.google.com`} className='hover:underline font-medium'>Gmail</Link>
            <Link href={`https://images.google.com`} className='hover:underline font-medium'>Images</Link>
            <CgMenuGridO className='bg-transparent text-4xl p-2 hover:bg-gray-200 rounded-full' />
            <button className='bg-blue-600 p-2 px-3 mr-2 hover:brightness-75 rounded-md text-white'>Sign in</button>
        </div>
    )
}

export default Header