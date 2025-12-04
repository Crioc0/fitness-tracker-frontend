<!-- layouts/default.vue -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header>

        <Header/>
      </el-header>
      <el-container>
        <el-aside class="hidden md:block mborder-r border-[var(--el-border-color)]">
          <Navigation class="hidden md:block"/>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script setup lang="ts">



// Следим за изменением маршрута


</script>

<style scoped>

</style>