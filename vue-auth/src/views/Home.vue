<template>
  <div class="home">
    <h1>{{'this is an home page' | captilizeFirstLetter}}</h1>
    <h2 v-if="user && user.data">{{'welcome' | capitalize}} {{user.data.email}}</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters({ user: "getUser" })
  }
};
</script>
