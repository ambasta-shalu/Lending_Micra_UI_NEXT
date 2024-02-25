/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_END_POINT: "http://14.99.182.161:8080",
    API_VERSION: "v1",
    GOOGLE_CLIENT_ID:
      "454745285179-qaf0caamljpkalfal91lbjsbl6bb9j4a.apps.googleusercontent.com",
      GOOGLE_CLIENT_SECRET: "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",
      FACEBOOK_CLIENT_ID:
      "6369617486427404",
      clientSecret: "f6e216be008e091f0188fe5c0f7a6ac0",
  },
};

module.exports = nextConfig;
