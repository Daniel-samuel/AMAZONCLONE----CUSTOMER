<template>
  <div class="registerPage">
    <div class="container">
      <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
          <div class="text-center">
            <a href="#">
              <img src="/img/logo-black.png" alt="" />
            </a>
          </div>
          <form class="mt-4">
            <div class="a-box a-spacing-extra-large">
              <div class="a-box-inner">
                <h1 class="a-spacing-small">Create account</h1>
                <!-- Your Name -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Your Name</label
                  >
                  <input
                    v-model="name"
                    type="text"
                    name="name"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-verification-request-info"
                  />
                </div>
                <!-- Email -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Email</label
                  >
                  <input
                    name="email"
                    v-model="email"
                    type="email"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-verification-request-info"
                  />
                </div>
                <!-- password -->
                <div class="a-row a-spacing-base">
                  <label for="ap_customer_name" class="a-form-label"
                    >Password</label
                  >
                  <input
                    name="password"
                    v-model="password"
                    type="password"
                    id="ap_customer_name"
                    class="a-input-text form-control auth-autofocus auth-required-field auth-verification-request-info"
                  />
                  <div class="a-alert container">
                    <div class="a-alert content">
                      Password must be at least 6 characters
                    </div>
                  </div>
                </div>
                <!-- Button -->
                <div class="a-row a-spacing-extra-large mb-4">
                  <span class="a-button-primary">
                    <span class="a-button-inner">
                      <span class="a-button-text" @click="onSignin"
                        >Create your Amazon account</span
                      >
                    </span>
                  </span>
                  <div class="a-row a-spacing-top-medium a-size-small">
                    <b>
                      By creating an account, you agree to Amazon's
                      <a href="#">Conditions of Use</a> and
                      <a href="#">Privacy Notice</a>
                    </b>
                  </div>
                </div>
                <hr />
                <div class="a-row">
                  <b>
                    Already have an account?
                    <nuxt-link to="/login" class="a-link-emphasis"
                      >Sign in</nuxt-link
                    >
                  </b>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
}
</style>
<script>
export default {
  // middleware: "auth",
  // auth: "guest",

  async asyncData({ $axios, params }) {
    try {
      let response = await $axios.$get(`/api/auth/user`);

      return {
        user: response.user,
      };
    } catch (err) {
      console.log(err);
    }
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async onSignin() {
      try {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        };
        console.log(data);
        let response = await this.$axios.$post("/api/auth/signup", data);
        if (response.success) {
          window.localStorage.setItem("token", response.token);
          window.localStorage.setItem("loggedIn", true);

          // Query User
          const config = {
            Headers: { Authorization: `Bearer ${response.token}` },
          };
          console.log(response.token);

          let userResponse = this.$axios.$get(`/api/auth/user`, config);
          console.log("userResponse:", userResponse);

          // this.$auth.loginWith("local", {
          //   data: { email: this.email, password: this.password },
          // });
          // this.$auth.setUserToken(token);
          this.$router.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },

  //   methods: {
  //     async onSignup() {
  //       try {
  //         let data = {
  //           name: this.name,
  //           email: this.email,
  //           password: this.password,
  //         };

  //         let response = await this.$axios.$post("/api/auth/signup", data);

  //         console.log("resp:", response);

  //         if (response.success) {
  //           await this.$auth.loginWith("local", {
  //             data: {
  //               email: this.email,
  //               password: this.password,
  //             },
  //           });

  //           this.$router.push("/");
  //         }
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     },
  //   },
  // };
};
</script>
