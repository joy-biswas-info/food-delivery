import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navigation = () => {
  const user = false;
  return (
    <nav className="flex justify-between items-center text-red-500 p-4 border-b-2 border-red-500">
      {/* Left Menu  */}
      <div className="flex-1 hidden md:flex justify-start items-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className=" justify-center">
      {/* Logo  */}
        <Link href="/" className="font-bold text-4xl">Masimo</Link>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden items-center justify-center">
        <Menu />
      </div>
      {/* Right Menu  */}
<div className="hidden md:flex flex-1 justify-end gap-4 items-center">
        <div className="md:absolute top-3 right-2 lg:static cursor-pointer bg-orange-300 p-1 rounded-md flex items-center justify-items-center text-white">
          <Image
            src="/phone.png"
            alt="phone-icon"
            width={15}
            height={15}
          ></Image>
          <span>+8801845727676</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="Order">Order</Link>
        )}
        <Link href="/contact">Contact</Link>
        <CartIcon />
      </div>
      
    </nav>
  );
};

export default Navigation;
