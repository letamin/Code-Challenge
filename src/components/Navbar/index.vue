<template>
  <div class="navbar">
    <a href="/"> <img src="@/assets/img/Aspire-Logo.svg" alt="icon" /></a>
    <div class="">
      <button class="btn" @click="handleRepay">Repay</button>
      <button class="btn" @click="handleLogOut">Log out</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogOut() {
      this.$store.dispatch("logout");
    },
    handleRepay() {
      this.$router.push("/repay");
    },
  },
};
</script>

<style></style>
