'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { RxHamburgerMenu, RxSun } from 'react-icons/rx';

const _links = [
  { href: '/', name: 'Home' },
  { href: '/works', name: 'Works' }
];

const Header = () => {
  return (
    <nav className="fixed z-10 w-full bg-slate-200 bg-opacity-25 backdrop-blur-sm">
      <div className="mx-auto flex max-w-screen-md items-center justify-between p-2">
        {/* Name */}
        <div className="pl-2 font-bold">
          <h1>Adrian Villanueva</h1>
        </div>

        {/* Links */}
        <div className="hidden md:block">
          {_links.map(({ href, name }, index) => (
            <Button variant="link" key={index} className="px-2">
              <Link href={href}>{name}</Link>
            </Button>
          ))}
        </div>

        <div className="flex">
          {/* Toggle Dark Mode */}
          <div>
            <Button variant="default" size="icon">
              <RxSun />
            </Button>
          </div>

          {/* Hamburger */}
          <div className="pl-2 md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <RxHamburgerMenu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mr-2 w-48">
                <DropdownMenuItem asChild>
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/works">Works</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
