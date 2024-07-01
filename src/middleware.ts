import { withAuth } from "next-auth/middleware";

export default withAuth({
    pages: {
        signIn: "/auth/signin", // Redirect to the custom sign-in page
    },
});

export const config = { matcher: ["/dashboard"] };
