import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
    return (
        <header role="banner" className="">
            <nav
                role="navigation"
                className="flex justify-between items-center p-1"
            >
                <Link href="/" className="cursor-pointer" role="logo">
                    <Image
                        src="/Logo-dark.png"
                        width={40}
                        height={40}
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
