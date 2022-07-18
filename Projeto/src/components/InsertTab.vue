<template>
  <div>
    <br/>
    <h3>Adicione outra Tab:</h3>
    <br/>
    <label> Titulo da Tab:</label>
    <input v-model="title" placeholder="edit me" @blur="checkInputTitle(title)">
    <span v-if="errorTitle" style="color:red">{{errorTitle}}</span>
    <br/>
    <label> conteudo da Tab:</label>
    <input v-model="content" placeholder="edit me" @blur="checkInputContent(content) && sendData()">
    <span v-if="errorContent" style="color:red">{{errorContent}}</span>
    <br/>
    <button :disabled="sendData()" @click.prevent="$emit('onChange', index , content) && sendData()">Adicionar</button>
    <span v-if="showError" style="color:red">Não foi possivel adicionar a Tab, verifique os campos</span>

  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
//defineProps<{
//    title: string;
//    content: string;
//}>();
const title = ref("")
const content = ref("")
const errorTitle = ref("")
const errorContent = ref("")
const showError =  ref(false)
defineEmits<{(e:"onChange", title: string, content: string):void}>();
function checkInputTitle(title: string){
  if(title.length < 3){
    return errorTitle.value = "titulo da tab muito curto"
  }
}
function checkInputContent(content: string){
  if(content.length < 0 ){
    return errorContent.value = "Campo Obrigatorio"
  }
}
function sendData(){
  if((title.value.length >3) && content.value.length > 0 )
    return showError.value = false
  return showError.value = true
}
</script>

<style>
</style>