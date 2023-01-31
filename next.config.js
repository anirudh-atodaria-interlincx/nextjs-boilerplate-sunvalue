/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: "/:customPage",
        destination: "/:customPage/index.html",
      },
      {
        source: "/:customPage",
        destination: "/:customPage.html"
      }
    ]
  },
}

module.exports = nextConfig
