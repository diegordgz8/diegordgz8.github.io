const { createApp } = Vue

createApp({
	data() {
		return {
			projects: [
				{
					name: 'Zumbao',
					description: 'Página web autoadministrable para un restaurante de comida rápida y almuerzos.',
					buildWith: 'Laravel, Livewire, TailwindCSS, Alpine',
					pictures: {
						src: 'img/works/zumbao.png',
						alt: 'Zumbao'
					},
					link: 'https://zumbaopty.com'
				},
				{
					name: 'SGC Web',
					description: 'Sistema web de gestion de condominio.',
					buildWith: 'Laravel, Livewire, TailwindCSS, Alpine',
					pictures: {
						src: 'img/works/sgcweb/about.png',
						alt: 'SGC Web'
					},
					link: null
				}
			],
			skills: [
				{
					name: 'Web development'
				},
				{
					name: 'Backend develpment'
				},
				{
					name: 'Frontend development'
				},
				{
					name: 'Teamwork'
				},
				{
					name: 'Love for learning'
				},
				{
					name: 'English Intermediate'
				}
			],
			technologies: [
				{
					name: 'HTML',
					img: 'html5_badge.svg',
					url: null
				},
				{
					name: 'CSS',
					img: 'css.svg',
					url: null
				},
				{
					name: 'JavaScript',
					img: 'javascript.svg',
					url: null
				},
				{
					name: 'PHP',
					img: 'php-logo.svg',
					url: null
				},
				{
					name: 'Laravel',
					img: 'laravel-logo.png',
					url: null
				},
				{
					name: 'NestJS',
					img: 'nest-logo.svg',
					url: null
				},
				{
					name: 'Vue.js',
					img: 'vue-logo.svg',
					url: null
				},
				{
					name: 'Laravel Livewire',
					img: 'livewire-logo.png',
					url: null
				},
				{
					name: 'Alpine.js',
					img: 'alpine-logo.jpg',
					url: null
				},
				{
					name: 'Bootstrap',
					img: 'bootstrap-logo.svg',
					url: null
				},
				{
					name: 'TailwindCSS',
					img: 'tailwindcss-mark.svg',
					url: null
				}
			]
		}
	}
}).mount('#app')