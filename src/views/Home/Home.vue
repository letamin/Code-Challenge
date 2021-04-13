<template>
  <div class="home">
    <Navbar />
    <form class="loan-form" @submit.prevent="handleSubmitLoan">
      <h3 class="text-center">Loan Form</h3>
      <div class="form-control">
        <label for="name">Name</label>
        <input
          type="text"
          v-model="user.name"
          required
          id="name"
          autocomplete="off"
        />
      </div>
      <div class="form-control">
        <label for="mail">Email</label>
        <input
          type="email"
          v-model="user.mail"
          required
          id="mail"
          autocomplete="off"
        />
      </div>
      <div class="form-control">
        <label for="amount">Amount</label>
        <input
          type="text"
          v-model="user.amount"
          required
          id="amount"
          @keydown="isNumber($event)"
          autocomplete="off"
        />
      </div>
      <div class="form-control">
        <label for="term">Loan Term</label>
        <input
          type="text"
          v-model="user.term"
          required
          id="term"
          autocomplete="off"
        />
      </div>
      <button class="btn btn-loan" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import mixins from "@/utils/mixins.js";

export default {
  name: "Home",
  mixins: [mixins],
  components: { Navbar },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    handleSubmitLoan() {
      this.user.status = 0;
      this.user.deadline = new Date();
      localStorage.setItem("loan", JSON.stringify(this.user));
      this.$router.push("/done");
    },
  },
};
</script>
