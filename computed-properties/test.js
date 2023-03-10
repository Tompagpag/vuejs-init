const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { description: "Faire des courses", done: true },
        { description: "Reviser", done: false },
        { description: "Lire mes emails", done: false },
        { description: "Faire le menage", done: true },
      ],
    };
  },
  methods: {
    inverseValue(id) {
      this.tasks[id].done = !this.tasks[id].done;
    },
  },
  computed: {
    // Filtrage des tasks en fonction du statut
    tasksNotDone() {
      return this.tasks.filter((task) => !task.done);
    },

    tasksDone() {
      return this.tasks.filter((task) => task.done);
    },
  },
}).mount("#app");
