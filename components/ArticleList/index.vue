<script setup>

  const store = useApiStore();
  const articleArray = ref(store.apiData_2.Data.find(
    e => e.TypeCode == '07'
  ).Data)
  
</script>

<template lang="pug">
div#article
  .container
    h2.ttl(data-aos="fade-up")
      | 相關文章
      span ─&ensp;Article&ensp;─

    section.grid.grid-cols-1.gap-10(class="sm:grid-cols-2 lg:grid-cols-3")
      a(v-for="article in articleArray" :key="article.ID" :href="article.LinkUrl.replace('?FeatureID=2809','')", target="_blank", rel="noopener noreferrer") 
        div.article-img(:style="{ backgroundImage: 'url(' + article.ImgSrc + ')'}")
        .flex.items-center.mt-2
          span.text-lg.line-clamp-2 {{ article.Title }}
          span.rounded-btn.text-sm more

</template>

<style scoped lang="sass">
.rounded-btn
  padding-top: .25rem
.article-img
  height: 180px
  background-size: cover
  background-position: center
  border-radius: .25rem
</style>
