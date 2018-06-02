<template>
  <div class="container">
    <h1>Login</h1>
    <div class="formBox">
      <login-form/>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm';

export default {
  name: 'login',
  components: {
    LoginForm,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .formBox {
    width: 360px;
  }
}
</style>
