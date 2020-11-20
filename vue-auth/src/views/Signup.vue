<template>
  <section>
    <b-field label="Email">
      <b-input v-model="email" type="email" maxlength="30"></b-input>
    </b-field>
    <!-- <b-field label="Email" type="is-danger" message="This email is invalid">
      <b-input v-model="email" type="email" maxlength="30"></b-input>
    </b-field>-->

    <b-field label="Password">
      <b-input v-model="password" type="password"></b-input>
    </b-field>

    <b-button type="is-primary" @click="submit()">Register</b-button>
  </section>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      email: "pjain@grepruby.io",
      password: "",
      user: {}
    };
  },
  methods: {
    submit() {
      console.log(this.email);
      console.log(this.password);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(data => {
          this.user = data;
          console.log(data);
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

