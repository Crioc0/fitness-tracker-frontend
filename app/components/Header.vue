<script setup lang="ts">
import MobileMenu from '~/components/MobileMenu.vue'
</script>

<template>
  <div class="flex justify-between py-4">
    <MobileMenu />
    <h1>Трекер</h1>
    <div>
      <el-button type="primary">
        Регистрация
      </el-button>
      <el-button>Войти</el-button>
    </div>
  </div>
</template>
