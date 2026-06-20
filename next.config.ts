import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    const locations: Record<string, string> = {
      virden: '/roofing-virden',
      rivers: '/roofing-rivers',
      minnedosa: '/roofing-minnedosa',
      neepawa: '/roofing-neepawa',
      carberry: '/roofing-carberry',
      wawanesa: '/roofing-wawanesa',
      killarney: '/roofing-killarney',
      boissevain: '/roofing-boissevain',
      melita: '/roofing-melita',
      reston: '/roofing-reston',
      souris: '/roofing-souris',
      russell: '/roofing-russell',
    };

    return Object.entries(locations).map(([town, path]) => ({
      source: `/services/roofing-company-in-${town}-mb`,
      destination: `${path}/`,
      permanent: true,
    }));
  },
};

export default nextConfig;
