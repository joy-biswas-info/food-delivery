"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";
const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/contact" },
];
const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
          className="cursor-pointer"
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      )}
      {open && (
        <div className="bg-red-500 h-[calc(100vh-6rem)] w-full text-white flex flex-col items-center justify-center gap-8 absolute left-0 top-24">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/order" onClick={() => setOpen(false)}>
              Order
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            {" "}
            <CartIcon />{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
