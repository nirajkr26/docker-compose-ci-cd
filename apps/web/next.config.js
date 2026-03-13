/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: [
        "@prisma/client",
        "@prisma/client-runtime-utils",
        "@prisma/adapter-pg",
    ],
};

export default nextConfig;
