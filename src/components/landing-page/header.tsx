"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

function Header() {
    return (
        <header role="banner" className="absolute top-0 left-0 right-0">
            <nav
                role="navigation"
                className="flex justify-between items-center p-2"
            >
                <Link href="/" className="cursor-pointer" role="logo">
                    <Image
                        src="/Logo-dark.png"
                        width={60}
                        height={60}
                        className=""
                        alt="u-n-i logo"
                        priority
                        // style={{ width: "50%", height: "auto" }}
                    />
                </Link>
                <div role="nav-items" className="">
                    {/* <Button variant="link">Login</Button> */}
                </div>
            </nav>
        </header>
    );
}

export default Header;
