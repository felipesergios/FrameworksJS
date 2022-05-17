<template>
  <div className="p-3 mb-2 bg-light text-dark container">
    <h1 className="white-text">TabComponent</h1>
    
    <button className="btn btn-primary" v-for="(option, index) in contents_tabs" :key="index"
      :class="{ selected: index === index }"
      @click="()=>{currentTabIndex=index}">
      {{ option.index }}
    </button>

        

           <div class="tabsPane">
        <div className="p-3 mb-2 bg-light text-dark">
         <Statement
          v-bind="contents_tabs[currentTabIndex]"
          :selection="currentOption"
          @on-selection="select"
          />
        </div>
        
      </div>
      
    </div>
</template>

<script setup lang="ts">
  import { ref, reactive, computed } from 'vue'
  import Statement, { type TabsProps } from './Statement.vue'
  


  const contents_tabs: TabsProps[] = [
      {
          index:1,
          content:"Conteudo do coisa 1"
      },
      {
          index:2,
          content:"Conteudo do coisa 2"
      },
      {
          index:3,
          content:"Conteudo do coisa 3"
      },
      {
          index:4,
          content:"Conteudo do coisa 4"
      },
  ]

  // estados reativos do componente
  const currentTabIndex = ref(0)          // ref() é útil para tipos primitivos
  const currentOption = ref<number>()     // como a opção inicial é undefined, é interessante definir o tipo
 

  /** Atualiza a opção selecionada pelo usuário. */


 

</script>

<style>
.tabsPane {
  padding: 50px;
}

.tabsPane {
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid rgb(255, 255, 255);
  background-color: #f0f0f0;
}
h1,bottom{
    color: black;
}

.tabsNumber {
  font-style: italic;
  font-size: smaller;
}
</style>