export default {
  data() {
    return {
      colors: [
        "bg-green-700",
        "bg-blue-700",
        "bg-indigo-700",
        "bg-orange-700",
        "bg-red-700",
        "bg-emerald-700",
        "bg-lime-700",
        "bg-teal-700",
        "bg-cyan-700",
        "bg-sky-700",
        "bg-violet-700",
        "bg-purple-700",
        "bg-rose-700",
      ],
    };
  },
  props: ["label", "color"],
  methods: {
    getRandomColor() {
      const randomNum = Math.floor(Math.random() * this.colors.length);
      return this.colors[randomNum];
    },
  },
  /*html*/
  template: `
  <span
    :class="color ?? getRandomColor()"
    class="rounded-full px-4 py-2 text-sm text-white"
  >{{label}}</span>
`,
};
