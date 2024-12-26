'use client'
import Link from "next/link";
import Image from 'next/image';
import React, { useMemo } from "react";
import BlueButton from "../buttons/BlueButton";
import logo from '@/src/public/logo-cemevyf-2024.webp';


const MainHeader = React.memo(function MyHeader() {
    const navItems = useMemo(() => ([
        { name: 'Nueva Orden', slug: 'new-order' },
        { name: 'Buscar Orden', slug: 'search-order' },
        { name: 'Buscar Cliente', slug: 'search-client' }
    ]), []);

    return (
        <div className='bg-gray-50 max-h-24 py-2 border-b-2 border-gris-claro'>
            <div className='flex flex-row   mx-auto w-11/12 md:max-w-7xl sm:justify-between items-center'>
                <div className="flex flex-row gap-2 md:gap-5">
                    <Link href="/" className="w-16 h-16 relative">
                        <Image
                        priority
                        fill 
                        src={logo}
                        alt="Logo" 
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" 
                        />
                    </Link>

                    <nav className="flex gap-3 lg:gap-4 my-auto">
                        {navItems.map(item => (
                        <Link 
                            key={item.slug}
                            className="text-sm lg:text-base w-20 sm:w-fit text-wrap font-semibold uppercase text-negro-opaco hover:text-azul hover:underline focus:text-azul focus:underline" 
                            href={`/${item.slug}`}
                        >
                            {item.name}
                        </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <BlueButton sx={{fontSize: 14, display: { xs: 'none', sm: 'block' }}}>Versión: Octubre 2024</BlueButton>
                </div>
            </div>
        </div>
    );
});

export default MainHeader;