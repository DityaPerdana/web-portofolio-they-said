"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";

const Navigation = () => {
  const navItems = [
    {
      name: "Home",
      link: "Home",
    },
    {
      name: "About Us",
      link: "About",
    },
    {
      name: "Services",
      link: "Services",
    },
    // {
    //   name: "Contact",
    //   link: "#contact",
    // },
    // {
    //   name: "Blog",
    //   link: "#blog",
    // },
    {
      name: "Projects",
      link: "#projects",
    },
  ];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State management for theme (shared across desktop and mobile)
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            {/* Explicit z-index to ensure the button is clickable */}
            <div className="relative z-10">
              <ThemeToggle />
            </div>
            <NavbarButton variant="primary">Get in Touch</NavbarButton>
          </div>
        </NavBody>
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={handleToggleMobileMenu}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <ThemeToggle />
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Get in Touch
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Navigation;
