type Project = {
	name: string
	description: string
	link: string
	photo: string
	id: string
}

type WorkExperience = {
	company: string
	title: string
	start: string
	end: string
	link: string
	id: string
}

type BlogPost = {
	title: string
	description: string
	link: string
	uid: string
}

type SocialLink = {
	label: string
	link: string
}

export const PROJECTS: Project[] = [
	{
		name: 'NestJS Monobank',
		description: 'Інтеграція з Monobank API для роботи з платежами.',
		link: 'https://nestjs-monobank.vercel.app',
		photo: 'https://res.cloudinary.com/terieyenike/image/upload/v1752577639/uploaded/23.png.png',
		id: 'project1'
	},
	{
		name: 'Studio admin',
		description:
			'Адмінка на Next.js + shadcn/ui: таблиці, графи, теми.',
		link: 'https://next-shadcn-dashboard-starter.vercel.app/auth/login',
		photo: 'http://res.cloudinary.com/terieyenike/image/upload/v1753457282/uploaded/Screenshot%202025-07-25%20at%2018.27.45.png.png',
		id: 'project2'
	}
]

export const WORK_EXPERIENCE: WorkExperience[] = [
	{
		company: 'AK LEADS',
		title: 'Фронтенд-розробник (Vue / Php)',
		start: '2022',
		end: '2024',
		link: '/experience/ak-leads',
		id: 'work2'
	},
	{
		company: 'Open Source проєкти та фриланс-замовлення',
		title: 'Фронтенд-розробник (Vue / React / Next.js)',
		start: '2024',
		end: '2025',
		link: '/experience/opensourse',
		id: 'work1'
	}
]

export const BLOG_POSTS: BlogPost[] = [
	{
		title: 'Husky, Lint-Staged та Commitlint для Next.js',
		description:
			'Як налаштувати Husky, lint-staged і commitlint у Next.js-проєкті.',
		link: '/blog/husky-eslint-prettier-setup-guide',
		uid: 'blog-1'
	},
	{
		title: 'Відправка email через BullMQ: черги без стресу',
		description:
			'Як організувати фонову відправку email у Nest.js за допомогою BullMQ.',
		link: '/blog/email-sending-with-bullmq',
		uid: 'blog-6'
	}
]

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'Github',
		link: 'https://github.com/MikroTik3'
	},
	{
		label: 'LinkedIn',
		link: 'https://www.linkedin.com/in/artur-docenko'
	},
	{
		label: 'Telegram',
		link: 'https://t.me/d16ddd348'
	}
]

export const EMAIL = 'dotsenk20034@gmail.com'
