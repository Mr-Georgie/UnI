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
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { setSignInCallBackUrl } from "@/lib/nextauth/utils";

const FormSchema = z.object({
    email: z.string().email({
        message: "Invalid email address. ",
    }),
});

type FormData = z.infer<typeof FormSchema>;

export function SignInForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = setSignInCallBackUrl(searchParams.get("callbackUrl"));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        const { email } = data;

        try {
            const response: any = await signIn("email", {
                email,
                callbackUrl,
                redirect: false,
            });
            console.log({ response });

            if (!response.ok) {
                toast({
                    title: "Error!",
                    description: "Could not authenticate user. Please retry",
                });
            }

            toast({
                title: "Success!",
                description: "Check email to continue sign in process",
            });

            form.reset();
        } catch (error: any) {
            toast({ title: "Login Failed", description: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="font-plus_jakarta_sans">
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">
                    signin to{" "}
                    <span className="px-1 text-brand font-extrabold">UnI</span>
                </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
                {/* <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline" disabled>
                        Github
                    </Button>
                    <Button variant="outline" disabled>
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
                </div> */}
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-5"
                    >
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <Label htmlFor="email" className="hidden">
                                        Email
                                    </Label>
                                    <FormControl>
                                        <Input
                                            className="text-black"
                                            placeholder="cool@mail.com"
                                            {...field}
                                            type="text"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={form.formState.isSubmitting}
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
                            {form.formState.isSubmitting
                                ? "Authenticating..."
                                : "continue with email"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col gap-8">
                <div>
                    {"don't have an account?"}
                    <Link href="/auth/signup" className="underline px-3">
                        click here
                    </Link>
                </div>
            </CardFooter>
        </Card>
    );
}
