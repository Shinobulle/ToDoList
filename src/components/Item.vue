<template>
  <input type="checkbox" v-model="isDone"  @click="task.markAsDone()" />
  <label class="" :class="item.done ? 'neutre' : 'test'">{{ item.label }}</label>
  <button class="supprimer" @click="$emit('remove')">Supprimer</button>
</template>

<script>
import Task from '@/Task';

export default {
  name: 'ItemPage',
  props: {
    item: Task,
    identifiant: Number
  },
  computed: {
    isDone: {
      get() {
        return this.item.done;
      },
    set() {
      this.$emit('toggle:done')
    }
    }
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

.supprimer{
  margin-left: 10px;
}
</style>