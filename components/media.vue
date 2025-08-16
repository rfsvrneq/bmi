<script setup></script>

<template lang="pug">
div#media.bg-cyan-200(class="imp_event" data-title="2025obesity" data-label="imp_section-2025obesity-video")
  .container.pb-0

    //- 影音專區
    .text-center.mb-10
      .rounded-btn
        p 影音專區

    .grid(class="grid-cols-1 lg:grid-cols-2 space-x-0 lg:space-x-5 space-y-5 lg:space-y-0")
      iframe.aspect-video.w-full.max-w-4xl.mx-auto(src="https://www.youtube.com/embed/dMc6u7YRsAU?si=glEsxmSnQrCgRdyG", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerpolicy="strict-origin-when-cross-origin", allowfullscreen)
      iframe.aspect-video.w-full.max-w-4xl.mx-auto(src="https://www.youtube.com/embed/dMc6u7YRsAU?si=glEsxmSnQrCgRdyG", title="YouTube video player", frameborder="0", allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", referrerpolicy="strict-origin-when-cross-origin", allowfullscreen)

    

</template>

<style scoped lang="sass">
@use '~/assets/sass/media' as *
@use '~/assets/sass/colors' as *
</style>
