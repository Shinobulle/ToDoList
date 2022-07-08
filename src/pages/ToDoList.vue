<template>
  <div class="grid grid-cols-3
  content-center
  border-2 border-gray-300 rounded-lg
  bg-gray-200 shadow-xl
  w-4/6
  m-auto">
    <h1 class="col-span-3 mb-3 text-2xl font-bold underline">{{ msg }}</h1>
    <Collection />
  </div>
</template>



<script>
import Collection from '@/components/Collection.vue';
export default {
  name: 'ToDoList',
  components: {
    Collection
},
  props: {
    msg: String
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
.hello{
  background-color: rgba(224, 224, 224, 0.829);
  margin: auto;
  width: 50rem;
  padding: 1rem;
  border-radius: 10px 10px 10px 10px;
}
</style>
