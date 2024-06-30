"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import logo from "../../../../public/logo.svg"
import Link from 'next/link'
import { menu } from '../../data/meun'
import { HiX } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <div className='py-4 flex justify-between items-center'>
            <Image src={logo} alt='logo' />
            <HiOutlineMenuAlt1 size={30} className='cursor-pointer lg:hidden' onClick={() => setShow(!show)} />
            <div className={`fixed lg:relative  flex gap-10 bg-orange-400 top-0 bottom-0 w-full ${show ? 'right-0' : '-right-full'} flex-col justify-center items-center transition-all duration-300`}>
                <HiX size={30} className='text-white absolute top-7 right-7 cursor-pointer' onClick={() => setShow(false)} />
                {menu.map((item, i) => {
                    return (
                        <Link key={i} href={item.url}>{item.label}</Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Navbar