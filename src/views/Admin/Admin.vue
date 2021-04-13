<template>
  <div class="admin">
    <Navbar />
    <div class="repay-container">
      <h3>Loan List:</h3>
      <div class="">Name: {{ loanList.name }}</div>
      <div class="">Amount: {{ loanList.amount }}</div>
      <div class="">Term: {{ loanList.term }}</div>
      <div class="">
        Status: {{ loanList.status == 0 ? "Not approved" : "Approved" }}
      </div>
      <button
        class="btn"
        v-if="loanList.status == 0"
        @click="handleApproveLoan"
      >
        Approve
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: "Admin",
  components: {
    Navbar,
  },
  data() {
    return {
      loanList: null,
    };
  },
  created() {
    this.loanList = JSON.parse(localStorage.getItem("loan"));
  },
  methods: {
    handleApproveLoan() {
      this.loanList.status = 1;
      localStorage.setItem("loan", JSON.stringify(this.loanList));
    },
  },
};
</script>

<style></style>
