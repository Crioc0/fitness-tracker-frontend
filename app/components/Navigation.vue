<script lang="ts" setup>
import {ref} from 'vue'
import {
  Home,           // для главной
  Dumbbell,       // для раздела тренировок
  List,           // для списка тренировок
  PlusCircle,     // для добавления тренировки
} from 'lucide-vue-next';

const isCollapse = ref(false)
const props = withDefaults(defineProps<{
  mode?: 'horizontal' | 'vertical',
}>(), {
  mode: 'vertical'
})
</script>


<template>
  <div class="flex flex-col transform translate-0">

    <el-menu
        :collapse="isCollapse"
        class="!border-none"
        default-active="1"
        :mode = "mode"
        router
    >
      <el-menu-item index="/">
        <el-icon>
          <Home/>
        </el-icon>
        <template #title>Главная</template>
      </el-menu-item>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <Dumbbell/>
          </el-icon>
          <span>Тренировки</span>
        </template>
        <el-menu-item index="/workouts">
          <el-icon>
            <List />
          </el-icon>
          <template #title>Тренировки</template>
        </el-menu-item>
        <el-menu-item index="/workouts/add">
          <el-icon>
            <PlusCircle />
          </el-icon>
          <template #title>Добавить тренировку</template>
        </el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>

</template>



<style>

</style>