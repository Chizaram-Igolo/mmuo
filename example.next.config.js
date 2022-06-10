/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  reactStrictMode: true,
  devIndicators: {
    buildActivity: false,
  },
  env: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "YOUR_VALUE" // development api
        : "YOUR_VALUE", // production api

    apiKey:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    authDomain:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    databaseURL:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    projectId:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    storageBucket:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    messagingSenderId:
      process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    appId: process.env.NODE_ENV === "development" ? "YOUR_VALUE" : "YOUR_VALUE",
    measurementId: process.env.NODE_ENV === "YOUR_VALUE" ? "" : "YOUR_VALUE",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "YOUR_VALUE" // development api
        : "YOUR_VALUE", // production api
  },
};

module.exports = nextConfig;
