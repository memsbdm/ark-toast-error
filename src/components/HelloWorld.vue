<script setup lang="ts">
import Toaster from "../stories/toast/toaster.vue";
import { toaster } from "../stories/toast/toaster.ts";
</script>

<template>
  <button @click="toaster.create({ title: 'Hello', description: 'World' })">
    Show Toast
  </button>
  <Toaster />
</template>
