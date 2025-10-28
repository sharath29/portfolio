// next.config.js
const isProd = process.env.NODE_ENV === 'production';

/*
 * Reads BASE_PATH from env (set in CI).
 * If provided without a leading slash, add it.
 * Example for GitHub Pages:
 *  - <user>.github.io            -> BASE_PATH should be empty
 *  - <user>.github.io/<repo>     -> BASE_PATH should be "/<repo>"
 */
function getBasePath() {
  let basePath = '';
  if (isProd && process.env.BASE_PATH) {
    basePath = process.env.BASE_PATH.startsWith('/')
      ? process.env.BASE_PATH
      : `/${process.env.BASE_PATH}`;
  }
  return basePath;
}

const basePath = getBasePath();
console.warn(`P.S. [basePath] is {${basePath}}`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Static export for GitHub Pages
  output: 'export',

  // Use BASE_PATH for both routing and asset URLs
  basePath,
  assetPrefix: basePath,

  // GitHub Pages routing is happier with trailing slashes
  trailingSlash: true,

  // Disable image optimization during export (avoids Squoosh/mozjpeg WASM issues)
  images: {
    unoptimized: true,
  },

  // OpenSSL 3-friendly hashing (prevents ERR_OSSL_EVP_UNSUPPORTED on Node 18/20)
  webpack: (config) => {
    config.output.hashFunction = 'xxhash64';
    return config;
  },

  // Expose basePath at runtime for safe client references
  publicRuntimeConfig: {
    basePath,
  },
};

module.exports = nextConfig;
