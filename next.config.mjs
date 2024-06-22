/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "s.gravatar.com",
            "images.unsplash.com",
        ],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: '**.example.com',
        //         port: '',
        //       },
        // ]
    },
};

export default nextConfig;
