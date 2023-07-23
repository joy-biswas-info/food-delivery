import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navigation = () => {
  const user = false;
  return (
    <div className="flex justify-between mt-1">
      {/* Left Menu  */}
      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/">Contact</Link>
        <Link href="/menu">Menu</Link>
      </div>
      {/* Logo  */}
      <Link href="/">Masimo</Link>
      {/* Mobile Menu  */}
      <Menu />
      {/* Right Menu  */}
      <div className="hidden md:flex gap-4">
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="Order">Order</Link>
        )}
        <Link href="/">Contact</Link>
      </div>
    </div>
  );
};

export default Navigation;
