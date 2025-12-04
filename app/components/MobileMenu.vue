<script setup lang="ts">
const route = useRoute()
const drawer = ref(false)
watch(
    () => route.path,
    () => {
      drawer.value = false
    }
)
</script>

<template>
  <span class="block md:hidden"><el-button type="primary"  @click="drawer = true"> open </el-button></span>
  <el-drawer v-model="drawer" direction="ltr" title="Главная" size="75%" resizable :with-header="false">
    <Navigation />
  </el-drawer>
</template>