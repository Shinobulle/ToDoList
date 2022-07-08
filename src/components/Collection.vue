<template>
  <div class="hello">
    <h2>Task</h2>
    <input v-model="name" type="text" placeholder="Ajouter une tâche" @keyup.enter="addTask()" />
    <p>{{ error }}</p>
    <input v-model="search" type="text" placeholder="Rechercher une tâche" @keyup="setSearch()">
    <input type="button" value="save" @click="save()">
    <!-- <input type="button" value="load" @click="load()"> -->
  </div>
  <div>
    <ul class="list-disc">
      <li v-if="collection.empty()">Pas de tâche encore défini</li>
      <li v-else  v-for="task in collection.filteredItems()" :key="task.id">
        <div class="tache">
          <Item :item="task" @remove="collection.remove(task)" @toggle:done="task.markAsDone(!task.done)"/>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import Item from './Item';
import CollectionClass from '@/Collection';
import Task from '@/Task';
export default {
  name: 'CollectionPage',
  components: {
    Item
  },
  data() {
    return {
      collection: new CollectionClass(),
      name: '',
      error: '',
      search: ''
    }
  },
  props: {
  },
  methods: {
    addTask(){ // faire un try catch
      try{
        let item = new Task(this.name)
        this.collection.add(item);
        this.name ='';
        this.error='';
      }catch(e){
        this.error = "Erreur: "+e.message;
      }
    },
    setSearch(){
      this.collection.filter(this.search);
    },
    save() {
      const parsed = JSON.stringify(this.collection.collection);
      localStorage.setItem('collection', parsed);
    },
    load() {
      const collection = JSON.parse(localStorage.getItem('collection'));
      collection.forEach(item => {
        const task = new Task(item.label, item.done);
        this.collection.add(task);
      });
      return this.collection;
    }
  },
  mounted() {
    if (localStorage.getItem('collection')){
      try{
        this.load();
      }catch(e){
        localStorage.removeItem('collection');
      }
    }
  },
  updated() {
    this.save();
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
.tache{
  background-color: rgba(235, 238, 235, 0.87);
  margin: auto;
  margin-bottom: 10px;
  width: fit-content;
  border: 2px solid;
  border-radius: 4px 4px 4px 4px;
  padding: 10px;
}


</style>
