import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, ComponentProps } from 'react';

import { cn } from '@/lib/utils';

import menu from '@/public/images/icon-menu.svg';
import menuClosed from '@/public/images/icon-menu-close.svg';

export default function Header() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
    const pathName = usePathname();

    return (
      <Link
        {...props}
        className={cn(
          'hover:text-soft-red',
          pathName === props.href && 'text-soft-red'
        )}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <header className="header flex items-center justify-between">
      <Link
        href="/"
        className="header_brand font-serif text-3xl font-bold hover:text-soft-red"
      >
        W.
      </Link>
      <ul className="nav_links hidden md:flex md:gap-4">
        <li className="nav_link">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="nav_link">
          <NavLink href="#New">New</NavLink>
        </li>
        <li className="nav_link">
          <NavLink href="#Popular">Popular</NavLink>
        </li>
        <li className="nav_link">
          <NavLink href="#Trending">Trending</NavLink>
        </li>
        <li className="nav_link">
          <NavLink href="#Categories">Categories</NavLink>
        </li>
      </ul>
      <button
        className="header_menu-btn md:hidden"
        onClick={() => setIsAsideOpen(true)}
      >
        <Image src={menu} alt="Menu Icon" />
      </button>
      <aside
        className={cn(
          'header_aside fixed inset-0 left-full z-10 bg-sky-500/50 backdrop-blur md:hidden',
          isAsideOpen && 'open'
        )}
      >
        <button
          className="absolute right-0 top-0 m-4 ms-auto block"
          onClick={() => setIsAsideOpen(false)}
        >
          <Image src={menuClosed} alt="Close Menu Icon" />
        </button>
        <ul className="nav_links flex h-full flex-col">
          <li className="nav_link flex grow text-off-white">
            <a
              className="font grow content-center border-b-4 border-very-dark-blue/30 text-center font-mono text-3xl font-bold hover:bg-very-dark-blue/30 hover:text-soft-orange"
              href="./index.html"
            >
              Home
            </a>
          </li>
          <li className="nav_link flex grow text-off-white">
            <a
              className="font grow content-center border-b-4 border-very-dark-blue/30 text-center font-mono text-3xl font-bold hover:bg-very-dark-blue/30 hover:text-soft-orange"
              href="./index.html"
            >
              New
            </a>
          </li>
          <li className="nav_link flex grow text-off-white">
            <a
              className="font grow content-center border-b-4 border-very-dark-blue/30 text-center font-mono text-3xl font-bold hover:bg-very-dark-blue/30 hover:text-soft-orange"
              href="./index.html"
            >
              Popular
            </a>
          </li>
          <li className="nav_link flex grow text-off-white">
            <a
              className="font grow content-center border-b-4 border-very-dark-blue/30 text-center font-mono text-3xl font-bold hover:bg-very-dark-blue/30 hover:text-soft-orange"
              href="./index.html"
            >
              Trending
            </a>
          </li>
        </ul>
      </aside>
    </header>
  );
}
