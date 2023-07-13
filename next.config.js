/** @type {import('next').NextConfig} */
const nextConfig = {
    env : {
        NEXT_PUBLIC_CLIENT_URL : process.env.NEXT_PUBLIC_CLIENT_URL
    }
}

module.exports = nextConfig
