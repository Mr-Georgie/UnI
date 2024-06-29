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
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/configureStore";
import { invitePartner } from "@/store/partner/partnerActions";
import { useToast } from "../ui/use-toast";

function QuickAction() {
    const dispatch = useDispatch<AppDispatch>();
    const { toast } = useToast();

    const [email, setEmail] = useState<string>("");

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const sendInviteToPartner = async () => {
        if (email) {
            invitePartner(email)
                .then((data) => {
                    console.log(data);
                    toast({
                        description:
                            "Success! Please ask your partner to check their mail",
                    });
                })
                .catch((error) => {
                    console.error(error);
                    toast({
                        description:
                            "Oops! We weren't able to send the invite. Please try again",
                    });
                });
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
                <div className="flex gap-3 md:gap-16 flex-col md:flex-row">
                    <Button className="w-full">Add Partner</Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="w-full">Start Saving</Button>
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
                            <div className="grid gap-2">
                                <Label htmlFor="email" className="hidden">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    className="text-center"
                                    placeholder="yourboo@example.com"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <Button className="" onClick={sendInviteToPartner}>
                                Send Invite
                            </Button>
                        </DialogContent>
                    </Dialog>
                    <Button className="w-full">Edit Budget</Button>
                    <Button className="w-full">Withdraw Savings</Button>
                </div>
            </div>
        </Card>
    );
}

export default QuickAction;
