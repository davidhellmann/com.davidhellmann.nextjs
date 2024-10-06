/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  trailingSlash: false,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  skipTrailingSlashRedirect: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
