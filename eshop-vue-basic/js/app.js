import ProductList from "./components/ProductList.js";
import Cart from "./components/Cart.js";

const { createApp } = Vue;

createApp({
  components: {
    ProductList,
    Cart,
  },
  data() {
    return {
      cart: [],
      showCart: false,
    };
  },
  computed: {
    count() {
      // Retourne le nombre d'éléments dans le panier
    },
    total() {
      // Retourne la somme totale du panier
    },
  },
  methods: {
    addToCart(product) {
      // Ajoute le produit avec une qtt = 1 s'il n'existait pas déjà, sinon on incrémente
    },
    removeFromCart(product) {
      // Décrémente le produit présent ou le supprime si avant décrémentation il est égal à 1
    },
    toggleCart() {
      // inverse value
    },
  },
}).mount("#app");
