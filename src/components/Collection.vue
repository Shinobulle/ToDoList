<template>
  <div class="grid grid-cols-2 gap-4 col-span-3">
    <input class="input" v-model="name" type="text" placeholder="Ajouter une tâche" @keyup.enter="addTask()" />
    <input class="input" v-model="search" type="text" placeholder="Rechercher une tâche" @keyup="setSearch()">
    <p class="col-span-2" :class="error != '' ? 'visible': 'invisible' ">{{ error }}</p>
  </div>
  <div class="grid grid-cols-1 gap-4 col-span-3 mb-4 mt-4">
    <ul class="">
      <li v-if="collection.empty()" class="text-lg antialiased font-semibold">Pas de tâche encore défini</li>
      <li v-else v-for="task in collection.filteredItems()" :key="task.id">
        <div class="task">
          <Item :item="task" @remove="collection.remove(task)" @toggle:done="task.markAsDone(!task.done)"/>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Item from './Item';
import CollectionClass from '@/Collection';
import StorageLocal from '@/StorageLocal';
const storageEngine = new StorageLocal();
const collection = new CollectionClass(storageEngine);
export default {
  name: 'CollectionPage',
  components: {
    Item
  },
  data() {
    return {
      collection,
      name: '',
      error: '',
      search: '',
    }
  },
  methods: {
    addTask(){
      try{
        this.collection.create(this.name);
        this.name ='';
        this.error='';
      }catch(e){
        this.error = "Erreur: "+e.message;
      }
    },
    setSearch(){
      this.collection.filter(this.search);
    },
  },
}
</script>

