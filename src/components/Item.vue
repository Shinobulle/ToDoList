<template>
  <input class="col-span-1  place-self-center" type="checkbox" v-model="isDone"  @click="task.markAsDone()" />
  <label class="col-span-2
                text-lg antialiased font-semibold
                tracking-wide" :class="item.done ? 'line-through decoration-2' : 'no-underline'">{{ item.label }}</label>
  <button class="col-span-1 w-5 place-self-center" @click="$emit('remove')"><img src="@/assets/Trash.svg" alt=""></button>
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
