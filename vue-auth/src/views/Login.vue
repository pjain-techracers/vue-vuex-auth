<template>
  <section>
    <b-field label="Email">
      <b-input v-model="email" type="email" maxlength="30"></b-input>
    </b-field>

    <b-field label="Password">
      <b-input v-model="password" type="password"></b-input>
    </b-field>

    <b-button type="is-primary" @click="submit()">Login</b-button>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    submit() {
      console.log(this.email);
      console.log(this.password);
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$noty.success("You are successfully logged in");
          this.$router.replace({ name: "Home" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped>
section {
  display: inline-block;
}
</style>
