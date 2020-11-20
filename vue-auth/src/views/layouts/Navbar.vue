<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="require(`@/assets/icon.png`)" />
      </b-navbar-item>
    </template>
    <template slot="start"></template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <router-link class="button is-primary" to="signup">Sign up</router-link>
          <router-link class="button is-light" to="login">Log in</router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>
