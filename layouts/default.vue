<script setup>
const isLoading = ref(true);

onMounted(async () => {
  await nextTick();
  // 真實專案可改成等待 API/資源載入
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>

<template>
  <div>
    <!-- <Navbar /> -->

    <div class="loading-overlay" v-if="isLoading">
      <div class="spinner"></div>
    </div>

    <main>
      <slot />
    </main>

    <!-- <Footer /> -->
  </div>
</template>

<style scoped lang="sass">
.loading-overlay
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background: #e1d6c1
  display: flex
  align-items: center
  justify-content: center
  z-index: 9999

.spinner
  width: 48px
  height: 48px
  border: 4px solid #bca779
  border-top-color: #fff
  border-radius: 50%
  animation: spin 1s linear infinite

@keyframes spin
  to
    transform: rotate(360deg)
</style>
