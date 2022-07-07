const URL = "http://localhost:8080";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "customer",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "/css/font-awesome/css/all.css" },

      { rel: "stylesheet", href: "/css/default.css" },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // auth: {
  //   strategies: {
  //     local: {
  //       token: {
  //         property: "token",
  //         // global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: "",
  //       },
  //       endpoints: {
  //         login: { url: "/api/auth/login", method: "post" },
  //         user: { url: "/api/auth/user", method: "get" },
  //       },
  //     },
  //   },
  // },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    Proxy: true,

    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: URL,
  },

  proxy: {
    "/api": URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  // auth: {
  //   strategies: {
  //     local: {
  //       // user: {
  //       //   property: false, // <--- Default "user"
  //       //   autoFetch: true,
  //       // },
  //       endpoints: {
  //         login: {
  //           url: "/api/auth/login",
  //           method: "post",
  //           propertyName: "token",
  //         },
  //         logout: {
  //           url: "/api/auth/logout",
  //           method: "post",
  //         },
  //         user: {
  //           url: "/api/auth/user",
  //           method: "get",
  //           propertyName: "", // <--- Default "user"
  //         },
  //       },
  //     },
  //   },
  // },

  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: "/api/auth/login",
  //           method: "post",
  //           propertyName: "token",
  //         },

  //         user: false,
  // user: {
  //   url: "/api/auth/user",
  //   method: "get",
  //   propertyName: "null",
  // },
  //       },
  //     },
  //   },
  // },

  //   auth: {
  //     login: {
  //       endpoint: "/api/auth/login",
  //       propertyName: "token",
  //     },
  //     user: false,
  //     // logout: {
  //     //   endpoint: 'auth/logout',
  //     //   method: 'GET',
  //     //   paramTokenName: '',
  //     //   appendToken: false
  //     // },
  //     // user: {
  //     //   endpoint: "/api/auth/user",
  //     //   propertyName: "Users.name",
  //     //   paramTokenName: "",
  //     //   appendToken: false,
  //     // },
  //   },
};
