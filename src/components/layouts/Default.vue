<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters({
      sidebarOpen: 'sidebar/open'
    })
  },
}
</script>

<template>

    <Base>
      <div class="sticky-header">
        <Navbar></Navbar>
      </div>

      <aside
        :class="{ closed: !sidebarOpen }"
      >
        <Sidebar></Sidebar>
      </aside>

      <main>  

        <div class="content">
          <h1 v-if="title"> {{ title }} </h1>
          <slot></slot>
        </div>
      </main>
    </Base>

</template>

<style lang="scss" scoped>
.sticky-header {
  z-index: 100;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  // height of the navbar has been set globally
  height: var(--nav-height);
}

aside {
  position: fixed;
  left: 0;
  bottom: 0;
  // make sure it doesn't scroll over navbar
  top: var(--nav-height);
  overflow: scroll;
  
  background: var(--bg);

  margin-left: var(--side-p);
  width: var(--sidebar-width);

  // padding-top: 2em;

  @include mobile-screen {
    z-index: 100;
    transition: 0.2s all;

    // margin-right: var(--side-p); 
    padding: 0;
    margin-left: 0;
  

    &.closed {
      margin-left: calc(-1 * var(--sidebar-width));
    }
  }
}

main {
  // padding: 1em var(--side-p);

  padding-top: 1em;
  padding-left: calc(var(--side-p) + var(--sidebar-width) + 3em);
  padding-right: var(--side-p);

  @include mobile-screen {
    padding: 1em var(--side-p);
  }
}
</style>