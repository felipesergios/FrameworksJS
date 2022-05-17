<template>
  <div class="contents">
    <h2>{{ content }}</h2>
   
  </div>
</template>

<script setup lang="ts">

export interface TabsProps{
    index: number,
    content:string
}
  // Eventos do componente.
  export interface TabsEvents {
    (e: 'onSelection', val: number): void // quando o usuário selecionar uma opção, passa seu índice
  }

  // define as propriedades e os eventos
  defineProps<TabsProps>()
  defineEmits<TabsEvents>()
</script>

<style scoped>
  h2 {
    font-weight: normal;
    font-size: 20pt;
    margin-top: 0;
    color: black;
  }

  button {
    margin-right: 10px;
    background-color: #ccc;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 3px;
    padding: 2px 5px;
  }

  .contents{
      background-color: white;
  }

  .selected {
    font-weight: bold;
    background-color: #aaa;
  }
</style>