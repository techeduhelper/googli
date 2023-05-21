import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import Image from 'next/image'
import { voice } from '/public/voice.svg'

const Searchbar = () => {
    return (
        <div className="flex flex-row border mt-10 md:w-6/12 p-4 rounded-s-full rounded-e-full sm:w-9/12">
            <AiOutlineSearch className="text-gray-500 h-6 w-6 m-auto" />
            <input className="outline-none  w-full pl-3" placeholder="Search here" />
            <Image src="@/public/voice.svg" width="24" height="24" />
        </div>
    )
}

export default Searchbar