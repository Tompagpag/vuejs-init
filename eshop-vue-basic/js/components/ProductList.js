export default {
  name: "ProductList",
  template: `<div class="container">
      <div class="row">
        <div class="col-md-4 mb-3" v-for="(product, index) in products" :key="index">
          <div class="card">
            <img :src="product.image" class="card-img-top" :alt="product.name">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">{{ product.price }}</p>
              <button class="btn btn-primary" @click="addToCart(product)">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </div>
    </div>`,
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Produit 1",
          price: 10.99,
          image:
            "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        },
        {
          id: 2,
          name: "Produit 2",
          price: 19.99,
          image:
            "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        },
        {
          id: 3,
          name: "Produit 3",
          price: 14.99,
          image:
            "https://images.unsplash.com/photo-1534233650908-b471f2350922?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
        },
      ],
    };
  },
  methods: {
    addToCart(produit) {
      // `$emit` : permet de faire appel aux attribut envoyÃ© par le parent dans le component
      this.$emit(produit)
    },
  },
};
