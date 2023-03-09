const { createApp } = Vue;

createApp({
  data() {
    return {
      items: ["Bonjour", "Hello", "Hola", "Tchao"],
      objects: [
        { salut: "Bonjour", langue: "Français", alternatif: "Salut" },
        { salut: "Hello", langue: "English", alternatif: "Hey" },
        { salut: "Hola", langue: "Spanish", alternatif: "Buenos dias" },
        { salut: "Tchao", langue: "Italian", alternatif: "Buongiorno" },
      ],
    };
  },
}).mount("#app");
