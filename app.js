import MobileMenu from "./components/mobile-menu.js";
import Job from "./components/job.js";
import ProjectGallery from "./components/project-gallery.js";
import Project from "./components/project.js";

export default {
  components: {
    MobileMenu,
    Job,
    ProjectGallery,
    Project,
  },
  data() {
    return {
      pagePosition: "HEADER",
      darkMode: true,
      lang: "es",
      es: {
        profile: "Ingeniero en Informática",
        bio: [
          "¡Hola! Mi nombre es Diego. Soy un desarollador web que ama programar.",
          "Siempre abierto a aprender nuevas cosas y mejorar cada vez más.",
        ],
        skills: [
          "Programación Orientada a Objetos (POO)",
          "API RESTful",
          "Diseño y desarrollo de base de datos",
          "Inglés intermedio",
        ],
      },
      menu: [
        { title: "Inicio", link: "#hero" },
        { title: "Experiencia", link: "#jobs" },
        { title: "Proyectos", link: "#works" },
        { title: "Habilidades", link: "#about" },
        { title: "Contacto", link: "#contact" },
      ],
      en: {
        profile: "Web developer",
        bio: [
          "Hi! My name is Diego. I'm a backend developer who loves programming.",
          "Always open to learn new things and improve more and more.",
        ],
        skills: [
          {
            name: "Object Oriented Programming (OOP)",
          },
          {
            name: "API RESTful",
          },
          {
            name: "Intermediate English",
          },
        ],
        menu: ["Home", "Works", "Skills", "Contact"],
      },
      jobs: [
        {
          name: "Alma V",
          position: "Desarrollador frontend",
          dateFrom: '2023-08',
          dateTo: null,
          description: "Como desarrollador frontend, me encargo de maquetar o modificar las páginas web que nos encargan como empresa, además de cargar los contenidos de las mismas. Además, en proyectos nuevos, también participo y colaboro en el análisis inicial de los requerimientos del proyecto.",
          buildWith: ["WordPress", "Elementor", "Laravel", "HTML", "CSS", "JavaScript"],
          pictures: {
            src: "img/jobs/almav.png",
          },
          link: "https://diegordgz8.github.io/pricing-page/",
          github: "https://www.github.com/diegordgz8/pricing-page",
        },
        {
          name: "Strive Enterprise",
          position: "Programador",
          dateFrom: '2022-12',
          dateTo: '2023-05',
          description: "Luego de aprobar el Bootcamp, como programador en la empresa, realicé varios sitios web responsivos para diversos clientes utilizando WordPress y el desarrollo de temas de Shopify para tiendas. Encargándome de la maquetación de las páginas con los lenguajes HTML, CSS, JS y Shopify Liquid, y de las funcionalidades a través de los plugin de WordPress y las apps de Shopify. Además, también administré los productos de las tiendas de Shopify en las que trabajé.",
          buildWith: ["WordPress", "Shopify", "HTML", "CSS", "Bootstrap", "JavaScript"],
          pictures: {
            src: "img/jobs/strive.png",
          },
          link: "https://diegordgz8.github.io/pricing-page/",
          github: "https://www.github.com/diegordgz8/pricing-page",
        },
        {
          name: "CEAR Latinoamericano",
          position: "Desarrollador web",
          dateFrom: '2021-12',
          dateTo: '2022-03',
          description: `Como parte del equipo de desarrollo de SISTELAR, colaboré el en desarrollo del sistema de arbitraje SISTELAR. Realicé actividades como escribir código en backend y frontend con supervisión del empleador, realizar modificaciones a la base de datos y colaborar con el resto del equipo para idear soluciones y planificar el desarrollo de las funcionalidades requeridas. Como mayor logro, quiero destacar que dirigí el desarrollo de una de las funcionalidades del sistema con apoyo de otro miembro junior del equipo, la cual fue desarrollada e implementada con éxito.`,
          buildWith: ["Laravel", "Livewire", "Bootstrap", "Alpine.js"],
          pictures: {
            src: "img/jobs/cear.png",
            alt: "SGC Web",
          },
          link: null,
          github: "https://www.github.com/diegordgz8/sgcweb",
        },
      ],
      projects: [
        // {
        // 	name: 'Zumbao',
        // 	description: 'Página web autoadministrable para un restaurante de comida rápida y almuerzos.',
        // 	buildWith: ['Laravel', 'Livewire', 'Tailwind CSS', 'Alpine.js'],
        // 	pictures: {
        // 		src: 'img/works/zumbao.png',
        // 		alt: 'Zumbao'
        // 	},
        // 	link: 'https://www.zumbaopty.com',
        // 	github: null,
        // },
        {
          name: "SGC Web",
          description: "Sistema web de gestion de condominio.",
          buildWith: ["Laravel", "Livewire", "TailwindCSS", "Alpine.js"],
          pictures: {
            src: "img/works/sgcweb/panel-propietario.png",
            alt: "SGC Web",
          },
          link: null,
          github: "https://www.github.com/diegordgz8/sgcweb",
        },
        {
          name: "Bonsai Pricing Page",
          description:
            "Práctica de maquetado responsivo de la página de precios de la plataforma Bonsai.",
          buildWith: ["HTML", "TailwindCSS", "Alpine.js"],
          pictures: {
            src: "img/works/bonsai.png",
          },
          link: "https://diegordgz8.github.io/pricing-page/",
          github: "https://www.github.com/diegordgz8/pricing-page",
        },
      ],
      technologies: [
        {
          name: "HTML",
          img: "html5_badge.svg",
          url: null,
        },
        {
          name: "CSS",
          img: "css.svg",
          url: null,
        },
        {
          name: "JavaScript",
          img: "javascript.svg",
          url: null,
        },
        {
          name: "PHP",
          img: "php-logo.svg",
          url: null,
        },
        {
          name: "Laravel",
          img: "laravel-logo.png",
          url: null,
        },
        {
          name: "Laravel Livewire",
          img: "livewire-logo.png",
          url: null,
        },
        {
          name: "NestJS",
          img: "nest-logo.svg",
          url: null,
        },
        {
          name: "Angular",
          img: "angular.svg",
          url: null,
        },
        // {
        // 	name: 'Vue.js',
        // 	img: 'vue-logo.svg',
        // 	url: null
        // },
        // {
        // 	name: 'Ionic',
        // 	img: {},
        // 	url: null
        // },
        {
          name: "Alpine.js",
          img: "alpine-logo.jpg",
          url: null,
        },
        {
          name: "Bootstrap",
          img: "bootstrap-logo.svg",
          url: null,
        },
        {
          name: "Tailwind CSS",
          img: "tailwindcss-mark.svg",
          url: null,
        },
      ],
      contacts: [
        {
          name: "LinkedIn",
          img: "img/logos/linkedin.png",
          link: "https://www.linkedin.com/in/diegordgz8",
        },
        {
          name: "GitHub",
          img: "img/logos/GitHub-Mark-120px-plus.png",
          link: "https://www.github.com/diegordgz8",
        },
      ],
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.scrollHandler);

    this.toggleDarkMode();
  },
  methods: {
    getYear() {
      const date = new Date();
      const year = date.getFullYear();
      return year;
    },
    scrollHandler() {
      const body = document.body,
        html = document.documentElement;

      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );

      const scrollY = window.scrollY;
      const screenBottom = height - 420;

      if (scrollY < 300) this.pagePosition = "HEADER";
      else if (scrollY + window.innerHeight > screenBottom)
        this.pagePosition = "FOOTER";
      else this.pagePosition = "BODY";
    },
    toggleDarkMode() {
      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      if (this.darkMode) {
        // Whenever the user explicitly chooses dark mode
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        // Whenever the user explicitly chooses light mode
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
