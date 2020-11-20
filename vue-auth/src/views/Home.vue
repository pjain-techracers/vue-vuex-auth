<template>
  <div class="home">
    <h1>This is an home page</h1>
    <h2 v-if="user && user.data">Logined with {{user.data.email}}</h2>
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
