import Pill from "./pill.js";

export default {
  components: {
    Pill,
  },
  data() {
    return {};
  },
  props: ["project"],
  methods: {},
  /*html*/
  template: `
    <div class="lg:hover:scale-105 transition-transform duration-500">
        <div class="relative overflow-hidden">
            <img class="w-full object-contain object-top md:border md:rounded-xl shadow-lg" :src="project.pictures?.src" :alt="project.pictures?.alt" />
            <div class="flex gap-2 absolute right-2 bottom-2">
                <a
                v-if="project.github"
                class="bg-primary-500 rounded-full shadow-lg w-12 h-12 p-2"
                :href="project.github"
                target="_blank"
                >
                    <img src="img/logos/github-light-32px.png" alt="" />
                </a>

                <a
                v-if="project.link"
                class="grid place-content-center bg-primary-500 rounded-full shadow-lg w-12 h-12 p-2 text-center"
                :href="project.link"
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

        <div class="flex flex-wrap justify-center lg:justify-start gap-2 font-bold mt-4">
            <pill v-for="item in this.project.buildWith" :label="item" color="bg-accent-dark-500"></pill>
        </div>
        <h2 class="text-3xl lg:text-5xl font-bold text-center lg:text-left mt-4">{{ this.project.name }}</h2>
        <p class="text-center lg:text-left text-lg lg:text-2xl mt-2 opacity-70">{{project.description}}</p>
    </div>
    `,
};
