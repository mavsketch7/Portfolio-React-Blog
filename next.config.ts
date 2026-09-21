import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'

const apiOrigin = new URL(process.env.API_URL ?? 'http://localhost:8000')
  .origin

const csp = [
  `default-src 'self'`,
  // beforeInteractive next/script (theme init) is delivered via Next's
  // client runtime, not a static tag, so it can't be hash-pinned; it's
  // the only inline script on the site and takes no user input.
  `script-src 'self' 'unsafe-inline'${isDev ? ` 'unsafe-eval'` : ''}`,
  // React inline `style` props require this; can't be avoided without a
  // nonce/middleware architecture the site doesn't otherwise need.
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: ${apiOrigin}`,
  `font-src 'self'`,
  `connect-src 'self' ${apiOrigin}${isDev ? ' ws:' : ''}`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'none'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join('; ')

const nextConfig: NextConfig = {
  // Next's image optimizer refuses to fetch from private IPs (SSRF guard),
  // which is exactly what 127.0.0.1 is in local dev — skip optimization
  // there; the real API domain in production is public, so it applies.
  ...(isDev ? { allowedDevOrigins: ['127.0.0.1'] } : {}),
  images: {
    qualities: [60, 75],
    unoptimized: isDev,
    remotePatterns: [
      {
        protocol: apiOrigin.startsWith('https') ? 'https' : 'http',
        hostname: new URL(apiOrigin).hostname,
        port: new URL(apiOrigin).port,
        pathname: '/storage/**',
      },
    ],
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default nextConfig
