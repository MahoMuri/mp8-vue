<template>
  <div id="mainNavbar">
    <b-navbar toggleable="lg" variant="barColor">
      <b-navbar-brand to="/"
        ><img src="@/assets/img/favicon.png" class="favicoLogo" /> Home
        Brew</b-navbar-brand
      >

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/coffee">Coffee</b-nav-item>
          <b-nav-item to="/tea">Tea</b-nav-item>
          <b-nav-item to="/shake">Shake</b-nav-item>
          <b-nav-item to="/order">Order</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item v-b-modal="'login'">Login</b-dropdown-item>
            <b-dropdown-item @click="showModal">Register</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Login Modal -->
    <b-modal id="login" ok-title="Login">
      <template #modal-title>
        <p><strong>Login</strong></p>
      </template>
      <b-container fluid>
        <b-form>
          <b-form-group
            id="username"
            label="Username:"
            label-for="usernameInput"
          >
            <b-form-input
              id="usernameInput"
              type="text"
              placeholder="Enter Username"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="password"
            label="Password:"
            label-for="passwordInput"
          >
            <b-form-input
              id="passwordInput"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>
        </b-form>
      </b-container>
    </b-modal>

    <!-- Register Modal -->
    <b-modal ref="register" hide-footer="true" size="lg">
      <template #modal-title>
        <p><strong>Register</strong></p>
      </template>
      <b-container class="wideForm">
        <b-form v-if="show">
          <!-- Username -->
          <b-form-group
            id="username"
            label="Username:"
            label-for="username-input"
          >
            <b-form-input
              id="username-input"
              v-model="form.name"
              placeholder="Enter username"
              required
            ></b-form-input>
          </b-form-group>

          <!-- Email -->
          <b-form-group
            id="email"
            label="Email address:"
            label-for="email-input"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="email-input"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              required
            ></b-form-input>
          </b-form-group>

          <!-- Password -->
          <b-form-group
            id="password"
            label="Password:"
            label-for="password-input"
          >
            <b-form-input
              id="password-input"
              v-model="form.password"
              type="password"
              placeholder="Password"
              required
            ></b-form-input>
          </b-form-group>

          <!-- Confirm Password -->
          <b-form-group
            id="confirm-password"
            label="Confirm Password:"
            label-for="confirm-password-input"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="confirm-password-input"
              v-model="form.confirm_password"
              type="password"
              placeholder="Confirm Password"
              required
            ></b-form-input>
          </b-form-group>
          <b-button @click="onSubmit" variant="primary">Submit</b-button>
        </b-form>
      </b-container>
    </b-modal>
  </div>
</template>

<script>
const zxcvbn = require("zxcvbn");

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirm_password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.$refs["register"].hide();
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    showModal() {
      this.$refs["register"].show();
    },
  },
  computed: {
    passwordStrength() {
      return zxcvbn(this.form.password);
    },
  },
};
</script>

<style scoped>
.bg-barColor {
  background-color: #b69276;
  font-size: 20pt;
  font-family: "Montserrat", sans-serif;
}
.navbar-brand {
  font-size: 35pt;
  font-family: "Caveat", cursive;
}
.favicoLogo {
  width: 75px;
}
.wideForm {
  max-width: 100%;
}
</style>
