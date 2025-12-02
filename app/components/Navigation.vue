<template>
  <div class="flex flex-col transform translate-0">

    <span class="hidden md:block"><el-button :icon="isCollapse ? Expand : Fold" class="w-16 hidden md:block"
                                             @click="toggleSidebar"/></span>
    <el-menu
        :collapse="isCollapse"
        class="el-menu-vertical-demo"
        default-active="2"
        router
        @close="handleClose"
        @open="handleOpen"
    >
      <el-menu-item index="/">
        <el-icon>
          <icon-menu/>
        </el-icon>
        <template #title>Главная</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Главная</span>
        </template>
        <el-menu-item index="/workouts">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <template #title>Тренировки</template>
        </el-menu-item>
        <el-menu-item index="/workouts/add">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <template #title>Добавить тренировку</template>
        </el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Fold, Location, Menu as IconMenu,} from '@element-plus/icons-vue'
import {Expand} from "lucide-vue-next";

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const toggleSidebar = () => {
  isCollapse.value = !isCollapse.value
}

</script>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  //width: 250px;
}
</style>