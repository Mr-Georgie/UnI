import React, { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Card } from "@tremor/react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { setInviteCallBackUrl } from "@/lib/nextauth/utils";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useQuery } from "react-query";
import Link from "next/link";

const FormSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
});

const fetchBudgets = async () => {
    const { data } = await axios.get("/api/budgets");
    return data;
};

type FormData = z.infer<typeof FormSchema>;

function QuickAction() {
    const { data: budgets, isLoading: isBudgetLoading } = useQuery(
        "budgets",
        fetchBudgets
    );
    const { data: session } = useSession();
    const { toast } = useToast();
    const callbackUrl = setInviteCallBackUrl(session);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

        const { email } = data;

        if (!callbackUrl) {
            setIsLoading(false);
            return toast({
                description: "Please refresh your browser",
            });
        }

        if (
            session &&
            session.user?.email &&
            session.user?.email.toLowerCase() === email.toLowerCase()
        ) {
            setIsLoading(false);
            return toast({
                variant: "destructive",
                description: "Please don't invite yourself, 😂",
            });
        }

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
                    description: "Could not send invite. Please retry",
                });
            }

            toast({
                title: "Success!",
                description: "An email has been sent to your partner",
            });

            form.reset();
        } catch (error: any) {
            toast({ title: "Sending Failed", description: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="w-full rounded-lg">
            <div className="flex flex-col">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content font-bold">
                        Quick Actions
                    </h4>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full">Add Partner</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    {"Enter your partner's email"}
                                </DialogTitle>
                                <DialogDescription>
                                    {"We'll send a link to their mail"}
                                </DialogDescription>
                            </DialogHeader>
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
                                                <Label
                                                    htmlFor="email"
                                                    className="hidden"
                                                >
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
                                            ? "sending..."
                                            : "send invite"}
                                    </Button>
                                </form>
                            </Form>
                        </DialogContent>
                    </Dialog>
                    <Button className="w-full" type="button" disabled>
                        Start Saving
                    </Button>
                    {budgets ? (
                        <Button className="w-full" disabled>
                            Edit Budget
                        </Button>
                    ) : (
                        <Button className="w-full">
                            <Link href="/create-budget">Create Budget</Link>
                        </Button>
                    )}

                    <Button className="w-full" disabled>
                        Withdraw Savings
                    </Button>
                </div>
            </div>
        </Card>
    );
}

export default QuickAction;
