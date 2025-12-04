<!-- layouts/default.vue -->
<script setup lang="ts">
// Следим за изменением маршрута
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside class="hidden md:block mborder-r border-[var(--el-border-color)]">
          <Navigation class="hidden md:block" />
        </el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>

</style>
