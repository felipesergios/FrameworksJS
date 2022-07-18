<template>
  <div>
    <h1>TabComponent</h1>
    <div>
      <div class="tabs">
        <TabContent
          v-for="tabContent, i in tabs_contents"
          :key="i"
          :index="tabContent.id"
          :text="tabContent.title"
          @onChange="(val) => updateContent(val)"
        />
      </div>
    </div>
  </div>
  <br/>
  <div class="content">
    {{ tabs_contents[i].content }}
  </div>
  <div>
    <AddTabVue @onChange="(title,content) => newTab(title,content)"/>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import TabContent from "./ViewTabContent.vue";
import AddTabVue from "./InsertTab.vue";

    async function newTab(title: string, content: string){
      console.log("chegou");      
      let aux = {
        title: title,
        content: content,
        id: increment()
      }
      tabs_contents.push(aux)
    }

    function increment(){
      return (tabs_contents.length -1) + 1
    }

    function updateContent(val: number) {
        console.log("mudou")
        i.value = val;
    }

    defineProps<{
    tabButtons: string[];
    content: string[];
    }>();

    const i = ref(0);

    let tabs_contents = reactive([{
      id: 0,
      content: "essa é a primeira TAB",
      title: "Primeira aba"
    },
    {
      id: 1,
      content: "essa é a segunda TAB.",
      title: "Segunda aba"
    },])

</script>

<style scoped>
.tabs{
    display: flex;
    flex-wrap: nowrap;
    padding-left: 10px;
    justify-content: space-evenly;
}
.content{
    align-items: center;
    padding-left: 10px;
}
</style>