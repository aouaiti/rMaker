/** @type {import('next').NextConfig} */
import nextTranslate from "next-translate";
const nextConfig = {
  reactStrictMode: true,
  ...nextTranslate(),
};

module.exports = nextConfig;
