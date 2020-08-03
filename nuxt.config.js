module.exports = {
  mode: "universal",
  head: {
    title: 'Title',
    titleTemplate: '%s - Title',
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    bodyAttrs: {class: 'light'}
  },

  srcDir: "src/",

  plugins: [
    // for global config
    '~/plugins/siteConfig.js',
  ],

  buildModules: ["@nuxt/components"],
  components: true,
  modules: [
    "@nuxt/content",
    "@nuxtjs/style-resources",
  ],

  // import screen size mixin in all components
  styleResources: {
    scss: [
      "styles/screen.scss",
      "styles/mixins.scss",
    ],
  },

  build: {
    extend (config, ctx) {
      config.module.rules.push(
        // YAML loader
        {
          test: /\.ya?ml$/,
          type: 'json',
          use: 'yaml-loader'
        }
      )
    }
  },
}