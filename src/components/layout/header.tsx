'use client'

import Link from 'next/link'

import { TextEffect } from '@/components/ui/text-effect'

import { ROUTES } from '@/constants'

export function Header() {
	return (
		<header className='mb-8 flex items-center justify-between'>
			<div>
				<Link
					href={ROUTES.HOME}
					className='font-medium text-black dark:text-white'
				>
					Артур Доценко
				</Link>
				<TextEffect
					as='p'
					preset='fade'
					per='char'
					className='text-zinc-600 dark:text-zinc-500'
					delay={0.5}
				>
					Frontend Engineer
				</TextEffect>
			</div>
		</header>
	)
}
