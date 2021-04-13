<template>
  <div class="home">
    <Navbar />
    <div class="repay-container">
      <h3>Loan List:</h3>
      <div class="">Name: {{ loanList.name }}</div>
      <div class="">Amount: {{ loanList.amount }}</div>
      <div class="">Term: {{ loanList.term }}</div>
      <div class="">
        Deadline: {{ new Date(loanList.deadline).toLocaleString() }}
      </div>
      <div class="">
        Status: {{ loanList.status == 0 ? "Not approved" : "Approved" }}
      </div>
      <button class="btn" v-if="loanList.status == 1" @click="handleRepay">
        Repay
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      loanList: null,
    };
  },
  methods: {
    handleRepay() {
      let deadline = new Date(this.loanList.deadline);
      deadline.setDate(deadline.getDate() + 7);
      this.loanList.deadline = deadline;

      localStorage.setItem("loan", JSON.stringify(this.loanList));
      this.$router.push("/done");
    },
  },
  created() {
    this.loanList = JSON.parse(localStorage.getItem("loan"));
  },
};
</script>

<style></style>
