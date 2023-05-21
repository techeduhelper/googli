import Link from 'next/link'
import React from 'react';
// import LocationFinder from './LocationFinder.js'

const Footer = () => {
    return (
        <footer className='absolute bottom-0 w-full bg-gray-100'>
            <div className='p-4'>
                India {/* <LocationFinder /> */}
            </div>
            <div className='flex justify-between bottom-0 sm:flex-col md:flex-row bg-slate-100 p-4 gap-4 outline-gray-400'>
                <div className="left flex flex-row gap-7 sm:justify-center">
                    <Link href={``}>About</Link>
                    <Link href={``}>Advertising</Link>
                    <Link href={``}>Business</Link>
                    <Link href={``}>How Search works</Link>
                </div>
                <div className="right flex flex-row gap-7 sm:justify-center">
                    <Link href={``}>Privacy</Link>
                    <Link href={``}>Terms</Link>
                    <Link href={``}>Settings</Link>
                </div>

            </div>
        </footer>


    )
}

export default Footer