const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
      pass: "",
      phone: "",
      html: `<p>Testing awesomeness :</p>`,
    };
  },
}).mount("#app");
