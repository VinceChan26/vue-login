<template>
  <el-form ref="form" :rules="rules" :model="form">
    <!-- Account -->
    <el-form-item prop="account">
      <el-input placeholder="Account" v-model="form.account" clearable>
        <template slot="prepend">
          <span class="icon is-small">
            <i class="fa fa-user"></i>
          </span>
        </template>
      </el-input>
    </el-form-item>
    <!-- Password -->
    <el-form-item prop="password">
      <el-input type="password" placeholder="Password" v-model="form.password" clearable>
        <template slot="prepend">
          <span class="icon is-small">
            <i class="fa fa-key"></i>
          </span>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submit">Submit</el-button>
      <el-button @click="clear">Clear</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'login-form',
  data: () => ({
    form: {
      account: '',
      password: '',
    },
    rules: {
      account: [
        { required: true, message: 'account is required', trigger: 'blur' },
        { min: 7, max: 12, message: 'account must be between 7 and 12 characters', trigger: 'blur' },
      ],
      password: [
        { required: true, message: 'password is required', trigger: 'blur' },
      ],
    },
  }),
  computed: {
    ...mapState('auth', {
      authRequest: 'request',
      authFailure: 'failure',
    }),
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const { form } = this;
          const isSuccess = await this.login(form);
          if (isSuccess) {
            this.$router.push('/');
          }
        }
      });
    },
    clear() {
      const { form } = this;
      form.account = '';
      form.password = '';
    },
  },
};
</script>
