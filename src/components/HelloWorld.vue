<script setup lang="ts">
import Toaster from "../stories/toast/toaster.vue";
import {ref} from "vue";

const example =ref({desc: 'example'})
let count = 0;
</script>

<template>
  <button @click="example.desc= 'Clicked ' + count++">
    Show Toast
  </button>


  <Toaster :msg="example"/>
</template>
