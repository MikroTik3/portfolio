import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Geist, Geist_Mono } from 'next/font/google'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import '@/styles/globals.css'

import { APP_CONFIG, SEO } from '@/constants'

export const metadata: Metadata = {
	title: {
		absolute: SEO.name,
		template: `%s - ${SEO.name}`
	},
	description: SEO.description,
	metadataBase: new URL(APP_CONFIG.baseUrl || ''),
	applicationName: SEO.name,
	keywords: SEO.keywords,
	manifest: '/manifest.webmanifest',
	openGraph: {
		title: SEO.name,
		description: SEO.description,
		type: 'website',
		emails: ['dotsenk20034@gmail.com'],
		siteName: SEO.name,
		locale: 'uk_UK',
		images: [
			{
				url: new URL(APP_CONFIG.baseUrl + '/opengraph.png'),
				width: 512,
				height: 512,
				alt: SEO.name
			}
		],
		url: APP_CONFIG.baseUrl
	},
	twitter: {
		card: 'summary_large_image',
		title: SEO.name,
		description: SEO.description,
		images: [
			{
				url: new URL(APP_CONFIG.baseUrl + '/opengraph.png'),
				width: 512,
				height: 512,
				alt: SEO.name
			}
		]
	},
	formatDetection: SEO.formatDetection
}

const geist = Geist({
	variable: '--font-geist',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='uk' suppressHydrationWarning>
			<body
				className={`${geist.variable} ${geistMono.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
			>
				<ThemeProvider
					enableSystem={true}
					attribute='class'
					storageKey='theme'
					defaultTheme='system'
				>
					<div className='flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]'>
						<div className='relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20'>
							<Header />
							{children}
							<Footer />
						</div>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
