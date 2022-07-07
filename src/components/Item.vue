<template>
  <input type="checkbox" v-model="task.done"  @click="task.markAsDone()" />
  <label class="" :class="task.done ? 'neutre' : 'test'">{{ task.label }}</label>
  <!-- <label>{{ task.done }}</label> -->
</template>

<script>
import Task from '@/Task';

export default {
  name: 'ItemPage',
  props: {
    item: Task,
    identifiant: Number
  },
  data (){
    return{
      task: new Task(this.item.label, this.item.done, this.item.id),
    }
  },
  methods: {
    markAsDone() {
        this.done = true;
    },
    rename(name) {
        this.label = name;
    },
    setId(id) {
        this.id = id;
    },
    getId() {
        return this.id;
    },
    compare(taskToCompare) {
        const label1 = this.label.toUpperCase();
        const label2 = taskToCompare.label.toUpperCase();
        return label1 == label2 ? 0 : (label1 > label2 ? 1 : -1);
    },
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.neutre{
  text-decoration: line-through;
}
</style>