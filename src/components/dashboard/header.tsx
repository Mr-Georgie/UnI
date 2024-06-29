"use client";

import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SideBarSmall } from "./sidebar-small";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Header() {
    return (
        <header role="banner" className="border-b bg-white">
            <nav
                role="navigation"
                className="flex justify-between md:justify-end items-center p-4"
            >
                <div
                    role="nav-items"
                    className="md:hidden flex gap-1 items-center"
                >
                    <Sheet>
                        <SheetTrigger asChild>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="size-8 cursor-pointer"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SideBarSmall />
                        </SheetContent>
                    </Sheet>
                    <div className="" role="logo">
                        <Image
                            src="/Logo-dark.png"
                            width={60}
                            height={60}
                            className=""
                            alt="u-n-i logo"
                            priority
                            // style={{ width: "50%", height: "auto" }}
                        />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;