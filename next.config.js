/** @type {import('next').NextConfig} */
const nextConfig = {
  extends: [
    //...
    "plugin:@next/next/recommended",
  ],
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };

    config.module.rules.push({
      test: /\.(node)$/,
      use: "node-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
