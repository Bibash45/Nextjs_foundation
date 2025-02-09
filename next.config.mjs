/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir:'build',
  compress:false,
  httpAgentOptions: {
    keepAlive: true,
    timeout: 60000,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          //   {
          //     key: "Content-Security-Policy",
          //     value:
          //       "default-src 'self'; script-src 'self'; style-src 'www.google.com'",
          //   },
          //   {
          //     key: "Permissions-Policy",
          //     value:
          //       "camera=();battery=(self);browsing-topics=();geolocation=();microphone=('https://domain.com')",
          //   },
          //   {
          //     key: "Stick-transport-security",
          //     value:
          //       "max-age=63072000;includeSubDomains;preload",
          //   },
          //   {
          //     key: "X-Content-Type-Options",
          //     value: "nosniff",
          {
            key: "X-Powered-BY",
            value: "false",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
