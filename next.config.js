const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

if (process.env.NODE_ENV === 'development') {
  (async () => {
    await setupDevPlatform();
  })();
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);