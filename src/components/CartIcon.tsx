import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <div className="flex gap-2">
      <Image src="/cart.png" alt="" height={"20"} width={"20"} />
      <span>Cart (0)</span>
    </div>
  );
};

export default CartIcon;
