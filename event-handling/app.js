const { createApp } = Vue;

createApp({
  data() {
    return {
      message: 'Merci de renseigner tous les champs',
      name: '',
      email: '',
      password: '',
      birthDate: '',
      data: undefined
    };

  },
  methods: {
    onSubmit(event) {
      if (this.name && this.email && this.password && this.birthDate) {
        const data = {name: this.name, email: this.email, password: this.password, birthDate: this.birthDate };
        this.data = data;
      } else {
        event.target.nextElementSibling.classList.add("red");
      }
    }
  }
}).mount("#app");
