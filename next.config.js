/** @type {import('next').NextConfig} */
const nextConfig = {
//   reactStrictMode: true,
// }

async rewrites() {
  return [
    {
      source: "/api/:path*", // Matched parameters can be used in the destination
      destination: "http://127.0.0.1:8000/api/:path*", // Destination URL structure can be modified
    },
  ];
},
};

module.exports = nextConfig
