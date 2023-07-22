export default {
  data() {
    return {
      open: false,
    };
  },
  methods: {},
  props: {
    menu: Array,
  },
  //   mounted() {
  //     mobileMenu = document.getElementById('mobile-menu');
  //     mobileMenu.
  //   },
  template:
    /*html*/
    `
    <div class="md:hidden">
        <button
            class="fixed right-0 top-0 z-30 p-4 grid place-content-center"
            @click="open = true"
        >
            <i class="fas fa-bars text-4xl text-white"></i>
        </button>

        <Transition
        name="custom-classes"
        enter-active-class="transition-all duration-500 ease"
        enter-from-class="-translate-x-full opacity-0"
        enter-to-class="translate-x-0 opacity-100"
        leave-active-class="transition-all duration-500 ease-in-out"
        leave-from-class="translate-x-0 opacity-100"
        leave-to-class="-translate-x-full opacity-0"
        >
            <div
                class="fixed top-0 left-0 z-50 w-screen h-screen md:hidden bg-primary-500 bg-opacity-90 text-center text-shade-light-500"
                id="mobile-menu"
                v-show="open"
            >
                <nav class="flex flex-col justify-center items-center">
                    <div class="flex justify-end items-center w-full">
                        <button class="p-4 text-4xl" @click="open = false">
                            <i class="fas fa-close"></i>
                        </button>
                    </div>
                    <a class="w-full py-3 hover:bg-primary-400 font-semibold transition-colors uppercase" :href="item.link" v-for="item in menu"
                    >{{ item.title }}</a
                    >
                </nav>
            </div>
        </Transition>
    </div>
    `,
};
