import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row bg-white-400 w-full h-12 shadow-md p-2 items-center justify-between">
      <div className="flex gap-5">
        <h1 className="font-bold content-center">LMS Portal</h1>
        <form>
          <Input type="search" placeholder="Search anything" />
        </form>
      </div>
      <div className="flex gap-4 items-center">
        <FaShoppingCart className="content-center cursor-pointer size-5" />
        <Link href="/login">
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            Login
          </Button>
        </Link>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default Header;
