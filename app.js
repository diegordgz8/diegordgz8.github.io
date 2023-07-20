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
      // form: {
      //   name: null,
      //   email: null,
      //   subject: "Portfolio",
      //   message: null,
      // },
    };
  },
  mounted() {},
  methods: {
    // sendMail() {
    //   axios
    //     .post("https://formspreezzz.io/f/xgeqkoke", this.form, {
    //       Accept: "application/json",
    //     })
    //     .then((res) => {
    //       this.form.name = null;
    //       this.form.email = null;
    //       this.form.message = null;

    //       Swal.fire(
    //         "Su mensaje ha sido enviado",
    //         "¡Gracias por contactarme!",
    //         "success"
    //       );

    //       // console.log(res);
    //     })
    //     .catch((e) => {
    //       Swal.fire("Error", "Hubo un problema al enviar su mensaje", "error");
    //       // console.log(e);
    //     });
    // },
    getYear() {
      const date = new Date();
      const year = date.getFullYear();
      return year;
    },
  },
};
