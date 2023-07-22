import MobileMenu from "./components/mobile-menu.js";
import ProjectGallery from "./components/project-gallery.js";
import Project from "./components/project.js";

export default {
  components: {
    MobileMenu,
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
        { title: "Trabajos", link: "#works" },
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
