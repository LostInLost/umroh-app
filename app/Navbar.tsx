import { Button, Divider, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Navbars() {
  return (
    <section className="shadow-md bg-umroh-blue text-white">
      <Navbar className="bg-transparent" isBlurred={false} maxWidth="xl">
        <NavbarBrand className="text-xl font-bold">UMROH.COM</NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link href={''} className="">
              Paket Promo
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <div className="flex items-center gap-3">
              <Button variant={'bordered'} className="text-white">
                Masuk
              </Button>
              <Divider orientation={'vertical'} />
              <Button variant={'ghost'} className="text-white" color={'success'}>
                Daftar
              </Button>
            </div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </section>
  );
}
