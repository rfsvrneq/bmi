<script setup>
defineProps({
  show: Boolean,
  content: String,
});

const emit = defineEmits(["close"]);
</script>

<template lang="pug">
Transition(name="modal")
  div.modal-fixed(v-if="show" @click.self="emit('close')")
    div.modal-content
      button.modal-close(@click="emit('close')") ✕
      p(v-html="content")

</template>

<style scoped lang="sass">
@import '~/assets/sass/media.sass'
.modal-fixed
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(#444138, .85)
  display: flex
  justify-content: center
  align-items: center
  z-index: 99

.modal-content
  background-color: white
  padding: 4rem
  max-width: 800px
  width: 90%
  text-align: left
  position: relative
  font-size: 1.25rem
  line-height: 1.6
  +m-768
    padding: 4rem 2rem 2rem 2rem
    font-size: 1.1rem

.modal-close
  color: #5faf74
  position: absolute
  font-size: 1.5rem
  top: 1rem
  right: 1rem

.modal-enter-active, .modal-leave-active
  transition: all 0.3s ease

.modal-enter-from, .modal-leave-to
  opacity: 0
</style>
