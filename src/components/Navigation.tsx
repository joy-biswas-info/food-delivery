import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navigation = () => {
  const user = false;
  return (
    <nav className="flex justify-between items-center mt-1 text-red-500 border-b-2 border-red-500 py-3">

      {/* Left Menu  */}
      <div className="hidden md:flex items-center gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Logo  */}
      <div className="flex-1 md:text-center justify-center items-center font-bold text-2xl text-red-500">
        <Link href="/">Masimo</Link>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right Menu  */}

      <div className="hidden md:flex gap-4 flex-1 justify-center items-center">
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
