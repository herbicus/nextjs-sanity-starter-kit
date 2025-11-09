import React from "react";
import Link from "next/link";

import NextJsLockup from "@/components/SVGs/NextJsLockup";

interface NavItem {
  name: string;
  value: string;
}

interface FooterProps {
  navItems: NavItem[];
}

const Header: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer className="bg-gray-800 py-20">
      <div className="site-container site-max-w">
        <div className="block space-y-4">
          {/* Logo */}
          <Link
            href="/"
            className="block shrink-0 text-white"
            title="Home"
            aria-label="Home"
          >
            <span className="sr-only">Home</span>
            <NextJsLockup
              className="h-6 w-auto text-current"
              aria-hidden="true"
            />
          </Link>

          <nav className="block space-y-4">
            {navItems.map((item, index) => (
              <Link
                key={`drawer-menu-item-${index}`}
                href={item.value}
                className="block text-lg font-medium text-white hover:underline"
                aria-label={item.name}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Header;
