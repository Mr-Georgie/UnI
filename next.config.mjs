/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "s.gravatar.com",
            "images.unsplash.com",
        ],
    },
};

export default nextConfig;
