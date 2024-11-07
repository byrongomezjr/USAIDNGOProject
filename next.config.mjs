/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
    // Add any other Next.js config options you need
};

export default nextConfig;