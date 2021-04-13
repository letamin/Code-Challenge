<template>
  <div class="login-container position-relative">
    <img src="@/assets/img/Aspire-Logo.svg" alt="icon" class="login-logo" />
    <Loading v-if="loading" />

    <form @submit.prevent="hanleUserLogin">
      <div class="text-center error" v-if="err">
        {{ err.response.data.message }}
      </div>
      <div class="form-control">
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div class="form-control">
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit" class="btn btn-login">Login</button>
    </form>
  </div>
</template>

<script>
import Loading from "@/components/Loading";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  components: {
    Loading,
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    },
    err() {
      return this.$store.state.user.err;
    },
  },
  methods: {
    hanleUserLogin() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("fetchUserLogin", formData);
    },
  },
};
</script>

<style></style>
