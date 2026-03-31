/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow placeholder images until real assets are added
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
