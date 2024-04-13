import Pill from "./pill.js";

export default {
  components: {
    Pill,
  },
  data() {
    return {};
  },
  props: ["job"],
  methods: {
    formatDate(dateString) {
      if(dateString == null) return 'Actualidad';
      const date = new Date(dateString);
      // Specify how you want your dates to be formatted
      return new Intl.DateTimeFormat("es-VE", {
        year: "numeric",
        month: "short",
      }).format(date);
    },
  },
  /*html*/
  template: `
    <div class="lg:hover:translate-x-4 transition-transform duration-500 flex flex-col items-center gap-4 md:flex-row md:items-start lg:gap-8">
        <img class="w-[300px] md:w-[150px] lg:w-[300px] aspect-[4/3] object-contain object-top" :src="job.pictures?.src" :alt="job.pictures?.alt" />
    
        <div class="relative overflow-hidden flex flex-col items-center md:items-start">
            <h2 class="text-3xl md:text-4xl font-bold text-center md:text-left">{{ this.job.name }}</h2>
            <span class="text-center md:text-left">{{ formatDate(this.job.dateFrom) }} - {{ formatDate(this.job.dateTo) }}</span>
            <div class="flex flex-wrap justify-center md:justify-start gap-2 font-bold mt-4">
                <pill v-for="item in this.job.buildWith" :label="item" color="bg-accent-dark-500"></pill>
            </div>
            <p class="text-center md:text-left text-lg md:text-xl mt-2 opacity-70">{{job.description}}</p>
            <div class="flex gap-2 mt-4">
                <a
                v-if="job.github"
                class="bg-primary-500 rounded-full shadow-lg w-12 h-12 p-2"
                :href="job.github"
                target="_blank"
                >
                    <img src="img/logos/github-mark-white.svg" alt="" />
                </a>

                <a
                v-if="job.link"
                class="grid place-content-center bg-primary-500 rounded-full shadow-lg w-12 h-12 p-2 text-center"
                :href="job.link"
                target="_blank"
                >
                    <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                </a>
            </div>
        </div>
    </div>
    `,
};
