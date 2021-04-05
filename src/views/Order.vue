<template>
  <div class="form container">
    <b-jumbotron
      header="Order Here!"
      lead="Submit your orders here!"
      class="aboutHeader"
    >
    </b-jumbotron>
    <b-form @submit="onConfirm">
      <b-form-group id="name" label="Name: " label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Name here..."
          required
        />
      </b-form-group>
      <b-form-group id="email" label="Email: " label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          placeholder="email@example.com"
          required
        />
      </b-form-group>
      <b-form-group
        id="message"
        label="Message (Optional): "
        label-for="message"
      >
        <b-form-textarea
          id="message"
          v-model="form.message"
          placeholder="Enter Message Here..."
          rows="3"
        />
      </b-form-group>
      <b-form-group id="category" label="Category: " label-for="category">
        <b-form-radio v-model="form.category" value="Coffee" required
          >Coffee</b-form-radio
        >
        <b-form-radio v-model="form.category" value="Tea" required
          >Tea</b-form-radio
        >
        <b-form-radio v-model="form.category" value="Shake" required
          >Shake</b-form-radio
        >
      </b-form-group>
      <b-form-group id="drink" label="Select Drinks: " label-for="drink">
        <b-form-select
          id="drink"
          v-model="form.drink"
          :options="drinkOptions"
          required
        />
      </b-form-group>
      <b-form-group id="quantity" label="Quantity: " label-for="quantity">
        <b-form-input
          id="quantity"
          v-model="form.quantity"
          type="number"
          required
        />
      </b-form-group>
      <b-button type="submit" variant="primary">Confirm Order</b-button>

      <!-- Modal Confirm before submitting -->

      <b-modal v-model="confirm" class="confirmModal">
        <template #modal-title class="confirmModal">
          <h3>Confirm Order?</h3>
        </template>
        <h1>Your Current Transaction:</h1>
        <br />
        <h2>Name:</h2>
        <p class="formBody">{{ form.name }}</p>
        <h2>Email:</h2>
        <p class="formBody">{{ form.email }}</p>
        <h3 v-show="form.message != ''">Message:</h3>
        <p v-show="form.message != ''" class="formBody">{{ form.message }}</p>
        <h4>Drink Category:</h4>
        <p>{{ form.category }}</p>
        <h4>Drink Ordered:</h4>
        <p>{{ form.drink }}</p>
        <h4>Quantity:</h4>
        <p>{{ form.quantity }}</p>
        <template #modal-footer>
          <b-button
            type="button"
            variant="secondary"
            @click="confirm = !confirm"
            >Cancel</b-button
          >
          <b-button @click="onSubmit" variant="primary">Submit</b-button>
        </template>
      </b-modal>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: this.generatedID,
        name: "",
        email: "",
        message: "",
        category: "",
        drink: null,
        quantity: null,
      },
      confirm: false,
      coffeeDrinks: [
        { value: null, text: "Select Coffee" },
        "Espresso",
        "Double Espresso",
        "Americano",
      ],
      teaDrinks: [
        { value: null, text: "Select Tea" },
        "Chamomlie Tea",
        "Matcha Tea",
        "Milk Tea",
      ],
      shakesDrinks: [
        { value: null, text: "Select Shake" },
        "Banana Milkeshake",
        "Mango Shake",
        "Nutella Milkshake",
      ],
    };
  },
  methods: {
    onConfirm(event) {
      event.preventDefault();
      this.confirm = !this.confirm;
    },
    onSubmit() {
      this.name = "";
      this.email = "";
      this.message = "";
      this.category = "";
      this.drink = null;
      this.quantity = 0;
      alert("Order has been Submitted!");
      this.confirm = !this.confirm;
      this.$router.push("/");
    },
    resetDrink() {
      this.form.drink = null;
    },
  },
  computed: {
    drinkOptions() {
      let defaultOption = {
        value: null,
        text: "Select From Above First",
      };
      let returnOptions = [defaultOption];
      if (this.form.category.toLowerCase() === "coffee") {
        this.resetDrink();
        returnOptions = this.coffeeDrinks.slice();
      } else if (this.form.category.toLowerCase() === "tea") {
        this.resetDrink();
        returnOptions = this.teaDrinks.slice();
      } else if (this.form.category.toLowerCase() === "shake") {
        this.resetDrink();
        returnOptions = this.shakesDrinks.slice();
      }

      return returnOptions;
    },
    generatedID() {
      return this.CryptoJS.MD5(this.name + this.email);
    },
  },
};
</script>

<style scoped>
.aboutHeader {
  background-color: #fbf3d9;
  margin-top: 1rem;
  margin-bottom: 0.5rem !important;
  padding: 1rem;
}

.formBody {
  font-size: 15pt;
}
</style>
