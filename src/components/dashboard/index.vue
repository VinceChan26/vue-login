<template>
  <div>
    <h1>Dashboard</h1>
    <div>
      <h2>Login Successful</h2>
      <a href="#" @click="logout">I wanna Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  methods: {
    logout() {
      this.$router.push({ path: 'login' });
    },
  },
};
</script>
