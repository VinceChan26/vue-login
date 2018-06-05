<template>
  <div v-loading>
    <h1>Dashboard</h1>
    <div>
      <h2>Hello, {{ username }}</h2>
      <a href="#" @click="handleLogout">I wanna Logout</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'dashboard',
  data: () => ({
    name: '',
  }),
  computed: mapGetters('auth', ['username']),
  methods: {
    ...mapActions('auth', ['logout']),
    handleLogout() {
      this.$confirm('Do you want leaving ?', 'Tips', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        type: 'warning',
        center: true,
      }).then(() => {
        const isLogout = this.logout();
        if (isLogout) {
          this.$message({
            message: 'Goodbye',
            type: 'success',
          });
          this.$router.push({ path: 'login' });
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'fine, it\'s accidentally touched',
        });
      });
    },
  },
};
</script>
