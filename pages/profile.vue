<template>
  <div>
    <Navbar />
    <main class="container-fluid c-section">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-spacing-top-medium"></div>
          <h2>Profile Page</h2>
          <a href="#" @click="onLogout">Logout</a>
          <form>
            <!-- name -->
            <div class="a-spacing-top-medium">
              <label>Name</label>
              <input
                class="a-input-text"
                style="width: 100%"
                v-model="user.name"
                :placeholder="user.name"
              />
            </div>

            <!-- email -->
            <div class="a-spacing-top-medium">
              <label>Email</label>
              <input
                class="a-input-text"
                style="width: 100%"
                v-model="user.email"
                :placeholder="user.email"
              />
            </div>

            <!-- password -->
            <div class="a-spacing-top-medium">
              <label>Password</label>
              <input
                class="a-input-text"
                style="width: 100%"
                v-model="user.password"
              />
            </div>

            <!-- button -->
            <hr />
            <div @click="onUpdateProfile()" class="a-spacing-top-large">
              <span class="a-button-register">
                <span class="a-button-inner">
                  <span class="a-button-text">Update Profile</span>
                </span>
              </span>
            </div>
          </form>
          <br />
        </div>
        <div class="col-sm-3"></div>
      </div>
    </main>
    <Footer />
  </div>
</template>
<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  //   async asyncData({ $axios }) {
  //     try {
  //       let response = await $axios.$get("http://localhost:8080/api/category");
  //       return {
  //         categories: response.categories,
  //       };
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  data() {
    return {
      user: {},
    };
  },

  mounted() {
    this.user = JSON.parse(window.localStorage.getItem("user"));
  },

  methods: {
    async onUpdateProfile() {
      let data = {
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
      };
      try {
        let config = {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        };
        let response = await this.$axios.$put("/api/auth/user", data, config);
        if (response.success) {
          this.user.name = "";
          this.user.email = "";
          this.user.password = "";
          await this.$auth.fetchUser();
        }
      } catch (err) {
        console.log(err);
      }
    },
    async onLogout() {
      await this.$auth.logout();
    },
  },
};
</script>
