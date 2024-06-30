import { Session } from "next-auth";

export const setSignInCallBackUrl = (callbackUrl: string | null) => {
    if (callbackUrl) {
        return `${callbackUrl}/?newuser=no`;
    } else {
        return "/dashboard?newuser=no";
    }
};

export const setSignUpCallBackUrl = (callbackUrl: string | null) => {
    if (callbackUrl) {
        return `${callbackUrl}/?newuser=yes`;
    } else {
        return "/dashboard?newuser=yes";
    }
};

export const setInviteCallBackUrl = (session: Session | null) => {
    if (session && session.userId) {
        return `/dashboard?partnerId=${session?.userId}`;
    } else {
        return null;
    }
};
