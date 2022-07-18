<template>
  <div class="contents">
    <button class="botao" @click.prevent="$emit('onChange', index)">
      {{ text }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  index: string[];
  text: string[];
}>();
defineEmits<{ (e: "onChange", val: number): void }>();
</script>

<style scoped>
</style>