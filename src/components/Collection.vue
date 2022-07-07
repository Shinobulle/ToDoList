<template>
  <div class="hello">
    <h2>Task</h2>
    <input v-model="name" type="text" placeholder="Ajouter un tâche" @keyup.enter="addTask()" />
    <!-- <button @click="add">Valider</button> -->
    <!-- <button @click="sort">Trier</button> -->
  </div>
  <div>
    <ul class="list-disc">
      <li v-if="collection.empty()">Pas de tache encore défini</li>
      <li v-else  v-for="tasks in collection.sort()" :key="tasks.id">
        <div>
          <Item :item="tasks" :identifiant="tasks.id"/>
          <button @click="collection.remove(tasks)">Supprimer</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Item from './Item';
import CollectionClass from '@/Collection';
// import Task from '@/Task';
export default {
  name: 'CollectionPage',
  components: {
    Item
  },
  data() {
    return {
      collection: new CollectionClass(),
      item: '',
      name: ''
    }
  },
  props: {
  },
  methods: {
    addTask(){
      this.collection.add(this.name);
      this.name ='';
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
