import Link from 'next/link';
import React from 'react';

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#8ecae6] sm:text-xl rounded md:p0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
