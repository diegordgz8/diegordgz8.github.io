const { createApp } = Vue

createApp({
	data() {
		return {
			lang: 'es',
			es: {
				profile: 'Desarrollador web',
				bio: [
					'¡Hola! Mi nombre es Diego. Soy un desarollador web que ama programar.',
					'Suelo trabajar con el stack TALL.',
				],
				skills: [
					{
						name: 'Programación Orientada a Objetos (POO)'
					},
					{
						name: 'API RESTful'
					},
					{
						name: 'Inglés intermedio'
					}
				],
				menu: ['Inicio', 'Trabajos', 'Habilidades', 'Contacto'],
			},
			en: {
				profile: 'Web developer',
				bio: [
					'Hi! My name is Diego. I\'m a backend developer who loves programming.',
					'I like to work with the TALL Stack.',
				],
				skills: [
					{
						name: 'Object Oriented Programming (OOP)'
					},
					{
						name: 'API RESTful'
					},
					{
						name: 'Intermediate English'
					}
				],
				menu: ['Home', 'Works', 'Skills', 'Contact'],
			},
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
					name: 'Tailwind CSS',
					img: 'tailwindcss-mark.svg',
					url: null
				}
			],
			contacts: [
				{
					name: 'Facebook',
					img: 'img/logos/f_logo_RGB-Blue_58.png',
					link: 'https://www.facebook.com/AEggo'
				},
				{
					name: 'Instagram',
					img: 'img/logos/instagram.png',
					link: 'https://www.instagram.com/aeggo8'
				},
				{
					name: 'LinkedIn',
					img: 'img/logos/linkedin.png',
					link: 'https://www.linkedin.com/in/diegordgz8'
				},
				{
					name: 'GitHub',
					img: 'img/logos/GitHub-Mark-120px-plus.png',
					link: 'https://www.github.com/diegordgz8'
				},
			],
			form: {
				name: null,
				email: null,
				subject: 'Portfolio',
				message: null,
			},
		}
	},
	methods: {
		sendMail() {
			axios.post(
				'https://formspreezzz.io/f/xgeqkoke',
				this.form,
				{ 'Accept': 'application/json' }
			).then((res) => {
				this.form.name = null;
				this.form.email = null;
				this.form.message = null;

				Swal.fire(
					'Su mensaje ha sido enviado',
					'¡Gracias por contactarme!',
					'success'
				)

				// console.log(res);
			}).catch(e => {
				Swal.fire(
					'Error',
					'Hubo un problema al enviar su mensaje',
					'error'
				)
				// console.log(e);
			});
		},
	}
}).mount('#app')