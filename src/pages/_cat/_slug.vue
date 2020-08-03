<script>
export default {
  async asyncData({$content, params}) {
    const cat = params.cat
    const slug = params.slug ? params.slug : 'index'

    const doc = await $content(cat, slug).fetch()

    return {
      cat, slug, doc
    }
  }
}
</script>

<template>
  <Default
    :title="doc.title"
  >
    <article>
      <nuxt-content :document="doc"></nuxt-content>
    </article>
  </Default>
</template>