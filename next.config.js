/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/api/:path*', // Matched parameters can be used in the destination
                destination: 'http://127.0.0.1:8000/api',
                permanent: true,
            },
        ]
    },
    experimental: {
        optimizeFonts: true,
        optimizeImages: true,
        optimizeCss: true,
        scrollRestoration: true,
        scriptLoader: true,
        stats: true,
        workerThreads: true,
        pageEnv: true,
        plugins: true,
        profiling: true,
    },
}

module.exports = nextConfig
