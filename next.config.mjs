/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Avoids Next.js Image Optimization (not supported on static)
  },
  trailingSlash: true,  // Important for static hosting to avoid 404s
};

export default nextConfig;
