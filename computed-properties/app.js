const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "",
      checkedTasks: [],
      tasksToDo: [
        "Faire des courses",
        "Réviser",
        "Lire mes emails",
        "Faire le ménage",
      ],

    };
  },
  computed: {
    tasksDone() {
      this.checkedTasks.forEach(element => {
        this.tasksToDo =  this.tasksToDo.filter(task => task != element)
      });
      return this.checkedTasks;
    },
    tasksToDo() {

      return this.tasksToDo
    },
  },
}).mount("#app");
