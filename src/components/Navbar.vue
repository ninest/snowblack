<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  created () {
    console.log(this.$store.state.sidebar.open);
    console.log(this.$store.actions);
  },
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebar/open'
    })
  },
  methods: {
    ...mapMutations({
      toggle: 'sidebar/toggle'
    })
  }
}
</script>

<template>
  <div class="navbar">
    <header>
      <div class="logo link-hover">
        <nuxt-link to="/"> {{ this.siteConfig.name }} </nuxt-link>
      </div>

      <nav>
        <ul>
          <li 
            v-for="link in siteConfig.navbar"
            class="link-hover"
          >
            <a v-if="link.external" :href="link.url" target="_blank">{{ link.text }}</a>
            <nuxt-link v-else :to="`/{link.url}`">{{ link.text }}</nuxt-link>
          </li>
        </ul>

        <div class="burger-wrapper" @click="toggle">
          <div class="burger">
            <div></div>
            <div></div>
            <div class="shorter"></div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: var(--nav-height);
  background-color: var(--bg);

  border: 1px solid var(--nav-border);

  header {
    position: relative;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    
    padding: 0 var(--side-p);
    
    display: flex;
    justify-content: space-between;

    .logo {
      font-size: 1.1em;
      font-weight: 700;
      letter-spacing: 0.1em;
    }


    nav {
      ul {
      list-style: none;
      margin: 0;
      padding: 0;

      display: flex;

      // hide on mobile; show burger instead
      @include mobile-screen {
        display: none;
      }

      // all links
      li {
        font-weight: 600;
        color: var(--nav-link);
      }
      // spacing between links
      li + li {
        margin-left: 2em;
        // less spacing on mobile
        @include mobile-screen {
          margin-left: 1.5em;
        }
      }
    }

    .burger-wrapper {
      display: none;
      @include mobile-screen {
        display: block;;
      }

      padding: 0.3em;
      border-radius: 0.2em;
      border: 1px solid var(--burger);

      .burger {
        div {
          width: 1.6em;
          height: 0.2em;
          border-radius: 0.1em;
          background-color: var(--burger);

          &.shorter {
            // shorter than the rest, float to the left
            margin-left:auto; 
            margin-right:0;
            width: 0.8em;
          }
        }
        div + div {
          margin-top: 0.2em;
        }
      }

    }
    }
  }

  .mobile-bar {
    background: skyblue;
    padding: 1em
  }
}

</style>