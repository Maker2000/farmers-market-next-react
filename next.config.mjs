/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects(){
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            }
        ]
    },
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: '**.com'
            },
            {
                protocol: 'https',
                hostname: '**.org'
            },
            {
                protocol: 'https',
                hostname: '**.co.**'
            },
        ]
    }
};

export default nextConfig;
