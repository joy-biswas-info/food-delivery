import React from "react";
import Menu from "./Menu";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="flex justify-between mt-1">
      {/* Logo  */}
      <Link href="/">Masimo</Link>
      <Menu />
    </div>
  );
};

export default Navigation;
