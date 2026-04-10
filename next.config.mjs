import createMDX from '@next/mdx'

const withMDX = createMDX()

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	reactStrictMode: false,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '*'
			}
		]
	},
	webpack: (config, { isServer }) => {
		config.cache = false
		return config
	},
	async redirects() {
		return []
	},
	experimental: {
		mdxRs: true
	}
}

export default withMDX(nextConfig)