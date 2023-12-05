import React from 'react';
import logo from '@/public/logo.png'
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
    return (
        <nav className="bg-[#171C2A] py-4">
            <div className="navBar">
                <a href="index.html">
                    <Image src={logo} alt='logo' className="max-w-[140px]" />
                </a>

                <div className="flex gap-4">
                    <Link href="/" className='navHome' id="lws-home">Home</Link>
                    
                    <Link href="/cart" className='navCart' id="lws-cart">
                        <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                        <span id="lws-totalCart">0</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;