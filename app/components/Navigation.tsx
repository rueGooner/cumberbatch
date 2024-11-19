import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { navigationItems } from '@/app/utils/navigation-items';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" className='bg-background'>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className={'flex-col items-start leading-none'}>
          {/*<Background />*/}
          <div className="inline rounded-lg">
            <p className="pr-2 py-0.5 text-lg font-bold leading-none">
              <span className="text-white bg-primary p-0.5 pr-0 rounded-l dark:text-primary dark:bg-background dark:pl-0">rue</span>ben
            </p>
            <p className="pr-2 pb-2 text-lg leading-none font-bold">cumber<span
              className="text-white bg-primary p-0.5 pl-0 rounded-r dark:text-primary dark:bg-background">batch</span></p>
          </div>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigationItems.map((item) => (
          <NavbarItem key={item.href} isActive={pathname === item.href}>
            <Link
              color='foreground'
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={pathname === item.href ? 'bg-primary text-white px-1 rounded-sm hover:cursor-default' +
                ' dark:bg-background dark:text-primary' : 'bg-transparent' +
                ' px-1 hover:text-primary hover:opacity-100'}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile Navigation */}
      <NavbarMenu>
        {navigationItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === navigationItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
