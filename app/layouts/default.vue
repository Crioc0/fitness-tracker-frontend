<!-- layouts/default.vue -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <span class="block md:hidden"><el-button type="primary"  @click="drawer = true"> open </el-button></span>
        <el-drawer v-model="drawer" direction="ltr" title="Главная" size="40%" resizable :with-header="false">
          <Navigation />
        </el-drawer>
      </el-header>
      <el-container>
          <Navigation class="hidden md:block"/>

        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const drawer = ref(false)

// Следим за изменением маршрута
watch(
    () => route.path,
    () => {
      drawer.value = false // Закрываем drawer при смене роута
    }
)

</script>
