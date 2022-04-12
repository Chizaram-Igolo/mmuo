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
  serverRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api

    apiKey:
      process.env.NODE_ENV === "development"
        ? "AIzaSyCJ3lxll_vqXZDPnOqItJS9NmtOUocwDBE"
        : "AIzaSyBQTs7yWw7_FJGWcqwBUbY6HZhPL0NFD2I",
    authDomain:
      process.env.NODE_ENV === "development"
        ? "dev-39f7d.firebaseapp.com"
        : "prod-54f22.firebaseapp.com",
    databaseURL:
      process.env.NODE_ENV === "development"
        ? "https://dev-39f7d-default-rtdb.firebaseio.com"
        : "https://prod-54f22-default-rtdb.firebaseio.com",
    projectId:
      process.env.NODE_ENV === "development" ? "dev-39f7d" : "prod-54f22",
    storageBucket:
      process.env.NODE_ENV === "development"
        ? "dev-39f7d.appspot.com"
        : "prod-54f22.appspot.com",
    messagingSenderId:
      process.env.NODE_ENV === "development" ? "914004719772" : "623659292042",
    appId:
      process.env.NODE_ENV === "development"
        ? "1:914004719772:web:a224ab20fb9adb59261559"
        : "1:623659292042:web:d1b7b226cc852e1e072473",
    measurementId: process.env.NODE_ENV === "development" ? "" : "G-VDECR433R7",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
};

module.exports = nextConfig;
