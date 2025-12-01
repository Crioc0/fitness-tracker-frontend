<script setup lang="ts">

</script>

<template>
  <div>
<Header/>
      <div class="text-3xl font-bold underline">fafa </div>
      <el-row class="mb-4 color bg-red-200 text" >
        <el-col :span="24">
          <div class="grid-content ep-bg-purple-dark" />
        </el-col>
      </el-row>

    <slot />
  </div>
</template>

<style>
</style>