<script>
export default {
  data() {
    return {
      cat: null,
      sidebar: null
    }
  },
  async fetch() {
    const cat = this.$route.params.cat
    const slug = this.$route.params.slug

    const sidebar = (await this.$content('sidebar').fetch())[cat]

    this.cat = cat
    this.sidebar = sidebar
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="loader" v-if="!$fetchState.pending">
      
      <div class="mobile-nav">
        <div class="link">
          <nuxt-link
            v-for="link in siteConfig.navbar" v-bind:key="link.url"
            :to="link.url"
            class="link link-hover-block highlight-active"
          >
            {{ link.text }}
          </nuxt-link>
        </div>
      </div>

      <div
        v-if="sidebar.sections" 
        v-for="section in sidebar.sections"
        v-bind="section.name"
        class="section"
      >
        <!-- section name -->
        <div class="title">{{ section.title }}</div>

        <!-- links -->
        <div class="links">
            <nuxt-link 
              v-for="link in section.links" v-bind:key="link.slug"
              class="link-hover-block highlight-exact-active"
              :to="`/${cat}${link.slug}`"
            >{{ link.text }}</nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar .loader {
  padding-top: 3em;


  @include mobile-screen {
    border-right: 1px solid var(--nav-border);

    > div {
      padding: 0 var(--side-p);
    }
  }

  .mobile-nav {
    display: none;
    @include mobile-screen { display: block; }

    padding-bottom: 1em;
    margin-bottom: 1em;

    border-bottom: 1px solid var(--nav-border);

    .link {
      display: block;
      font-weight: 700;
    }
    .link + .link {
      // margin-top: 1em;
    }
  }


  .section {
    .title {
      font-weight: 700;
    }
  }
  .section + .section {
    margin-top: 1.5em;
  }
}
</style>