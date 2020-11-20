<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="require(`@/assets/icon.png`)" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        <router-link to="/">Home</router-link>
      </b-navbar-item>
      <b-navbar-item>
        <router-link v-if="user.loggedIn" to="/authentic">My Page</router-link>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons" v-if="!user.loggedIn">
          <router-link class="button is-primary" to="signup">Sign up</router-link>
          <router-link class="button is-light" to="login">Log in</router-link>
        </div>
        <b-button v-else type="is-primary" @click="logout()">Logout</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";
export default {
  name: "Navbar",
  computed: {
    ...mapGetters({ user: "getUser" })
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ path: "/" });
        });
    }
  }
};
</script>
