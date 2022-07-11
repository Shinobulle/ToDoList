<template>
  <div class="grid grid-cols-2 gap-4 col-span-3">
    <input class="input" v-model="collectionStore.name" type="text" placeholder="Ajouter une tâche" @keyup.enter="collectionStore.addTask()" />
    <input class="input" v-model="collectionStore.search" type="text" placeholder="Rechercher une tâche" @keyup="collectionStore.setSearch()">
    <p class="col-span-2" :class="collectionStore.error != '' ? 'visible': 'invisible' ">{{ collectionStore.error }}</p>
  </div>
  <div class="grid grid-cols-1 gap-4 col-span-3 mb-4 mt-4">
    <ul class="">
      <li v-if="collectionStore.collection.empty()" class="text-lg antialiased font-semibold">Pas de tâche encore défini</li>
      <li v-else v-for="task in collectionStore.collection.filteredItems()" :key="task.id">
        <div class="task">
          <Item :item="task" @remove="collectionStore.collection.remove(task)" @toggle:done="task.markAsDone(!task.done)"/>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Item from './Item';
import { useCollectionStore } from '@/stores/CollectionStore';

export default {
  name: 'CollectionPage',
  components: {
    Item
  },
  data() {
    return {
      collectionStore: useCollectionStore()
    }
  },
  methods: {
  }
}
</script>

