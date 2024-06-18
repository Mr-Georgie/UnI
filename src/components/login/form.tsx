"use client";

import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function LoginForm() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onSubmit = async () => {
        setIsLoading(true);

        let timer: NodeJS.Timeout;

        timer = setTimeout(() => {
            setIsLoading(false);
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    };

    return (
        <Card className="font-plus_jakarta_sans">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                    login to{" "}
                    <span className="px-1 text-blueshade font-extrabold">
                        UnI
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
                        Github
                    </Button>
                    <Button variant="outline">
                        {/* <Icons.google className="mr-2 h-4 w-4" /> */}
                        Google
                    </Button>
                </div>
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                            Or
                        </span>
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="email" className="hidden">
                        Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-8">
                <Button
                    className="w-full bg-blue"
                    disabled={isLoading}
                    onClick={onSubmit}
                >
                    {isLoading && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2 h-4 w-4 animate-spin"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                    continue with email
                </Button>

                <div>
                    don't have an account?
                    <Link href="/signup" className="underline px-3">
                        click here
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
