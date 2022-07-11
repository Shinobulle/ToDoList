<template>
  <div class="grid grid-cols-2 gap-4 col-span-3">
    <input class="
    col-span-1
    ml-2
    rounded-md border-gray-300 border-2 hover:border-gray-500
    text-center
    bg-gray-50 hover:bg-white" v-model="name" type="text" placeholder="Ajouter une tâche" @keyup.enter="addTask()" />
    <input class="
    col-span-1
    mr-2
    rounded-md border-gray-300 border-2 hover:border-gray-500
    text-center
    bg-gray-50 hover:bg-white" v-model="search" type="text" placeholder="Rechercher une tâche" @keyup="setSearch()">
    <p class="col-span-2" :class="error != '' ? 'visible': 'invisible' ">{{ error }}</p>
  </div>
  <div class="grid grid-cols-1 gap-4 col-span-3 mb-4 mt-4">
    <ul class="">
      <li v-if="collection.empty()" class="text-lg antialiased font-semibold">Pas de tâche encore défini</li>
      <li v-else v-for="task in collection.filteredItems()" :key="task.id">
        <div class="mt-3 m-auto
                    border-2 border-gray-400 rounded-lg hover:border-gray-500
                    bg-gray-100 hover:bg-gray-50
                    w-5/6
                    shadow-md hover:shadow-xl
                    grid grid-cols-4 gap-2 content-center">
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

