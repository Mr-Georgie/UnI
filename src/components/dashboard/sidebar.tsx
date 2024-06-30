"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

function Sidebar() {
    const { data: session } = useSession();

    const pathname = usePathname();

    function truncateString(str: string | null | undefined) {
        // Check if the string is longer than 7 characters
        if (str && str.length > 9) {
            return str.slice(0, 9) + "...";
        }
        return str;
    }

    return (
        <div className="h-full hidden md:flex md:flex-col gap-8">
            <div className="grid grid-cols-3 bg-white shadow-md m-4 rounded-lg">
                <div className="col-span-1 rounded-lg bg-brand-dark p-2 m-2 flex items-center justify-center">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={40}
                        className=""
                        alt="u-n-i logo"
                        priority
                    />
                </div>
                <div className="col-span-2 flex flex-col my-2">
                    <span className="font-outfit">
                        Hello
                        {/* {session?.user?.name} */}
                    </span>
                    {/* <span className="font-outfit text-xs">Welcome</span> */}
                    <span className="font-outfit text-xs">
                        {truncateString(session?.user?.email) ?? "Welcome"}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-around gap-4 w-full font-outfit text-stone-500">
                <Link
                    href="/dashboard"
                    className={`p-3 rounded-lg mx-4 flex gap-3 ${
                        pathname === "/dashboard"
                            ? "bg-white text-brand font-semibold"
                            : ""
                    }`}
                >
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
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <span>Dashboard</span>
                </Link>
                <Link
                    href="/dashboard"
                    className={`p-3 rounded-lg mx-4 flex gap-3 ${
                        pathname.includes("/budgets")
                            ? "bg-white font-semibold"
                            : ""
                    }`}
                >
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
                            d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                        />
                    </svg>
                    <span>Budgets</span>
                </Link>
                <Link
                    href="/dashboard"
                    className={`p-3 rounded-lg mx-4 flex gap-3 ${
                        pathname === "/dashboard/savings"
                            ? "bg-white font-semibold"
                            : ""
                    }`}
                >
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
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                        />
                    </svg>

                    <span>Savings</span>
                </Link>
                <Link
                    href="/dashboard"
                    className={`p-3 rounded-lg mx-4 flex gap-3 ${
                        pathname === "/dashboard/settings"
                            ? "bg-white font-semibold"
                            : ""
                    }`}
                >
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
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                    </svg>
                    <span>Settings</span>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
