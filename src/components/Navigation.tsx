import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navigation = () => {
  const user = false;
  return (
    <nav className="flex justify-between mt-1 text-red-500 border-b-2 border-red-500 p-4 ">

      {/* Left Menu  */}
      <div className="hidden md:flex gap-4 flex-1 items-center">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Logo  */}
      <div className="flex-1 md:text-center font-bold text-2xl items-center">
        <Link href="/">Masimo</Link>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden items-center">
        <Menu />
      </div>
      {/* Right Menu  */}

      <div className="hidden md:flex gap-4 flex-1 items-center">
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
