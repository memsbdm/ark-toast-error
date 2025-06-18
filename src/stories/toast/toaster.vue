<script lang="ts" setup>
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastActionTrigger,
  ToastCloseTrigger,
  Toaster,
} from "@ark-ui/vue/toast";
import { toaster } from "./toaster.ts";
import {onMounted, watchEffect} from "vue";

const props = defineProps<{
  msg: {desc: string}
}>()

onMounted(()=>{
  toaster.create({title: 'onMounted called!', description: props.msg.desc})
})

watchEffect(()=>{
  toaster.create({title: 'watchEffect called!', description: props.msg.desc})
})
</script>


<template>
  <Toaster v-slot="toast" :toaster="toaster">
    <ToastRoot :key="toast.id" :class="[$style.root]">
      <ToastTitle>{{ toast.title }}</ToastTitle>
      <ToastDescription>{{ toast.description }}</ToastDescription>
      <ToastActionTrigger v-if="toast.action">Action</ToastActionTrigger>
      <ToastCloseTrigger>Close</ToastCloseTrigger>
    </ToastRoot>
  </Toaster>
</template>

<style module>
.root {
  height: var(--height);
  opacity: var(--opacity);
  scale: var(--scale);
  translate: var(--x) var(--y);
  transition-duration: 200ms;
  transition-property: translate, scale, opacity, height;
  will-change: translate, scale, opacity, height;
  z-index: var(--z-index);
}
</style>
