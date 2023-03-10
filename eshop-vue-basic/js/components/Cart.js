export default {
  name: "Cart",
  template: `<div class="row">
    <div class="col-md-12">
      <h2>Panier</h2>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Nom du produit</th>
            <th scope="col">Prix unitaire</th>
            <th scope="col">Quantité</th>
            <th scope="col">Prix total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in cart" :key="index">
            <td>{{ product.name }}</td>
            <td>{{ product.price }} €</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price * product.quantity }} €</td>
            <td>
              <button @click="removeFromCart(product)" class="btn btn-danger btn-sm">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Total : {{ total }} €</p>
      <p>Nombre total de produits : {{ count }}</p>
    </div>
  </div>`,
  methods: {
    removeFromCart(product) {
      // use $emit
      this.$emit('product')
    },
  },
};
