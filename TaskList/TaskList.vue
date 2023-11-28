<!-- TaskList.vue -->

<template>
  <div class="task-list-container">
    <h2>{{ title }}</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id" class="task-item">
        {{ task.title }} - {{ task.completed ? 'Completed' : 'Incomplete' }}
        <button @click="toggleCompletion(task)">Toggle Completion</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    tasks: Array,
  },
  methods: {
    toggleCompletion(task) {
      this.$emit('toggle-completion', task);
    },
  },
};
</script>

<style>
.task-list-container {
  margin-bottom: 20px;
}

.task-item {
  list-style: none;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

button {
  margin-left: 10px;
  cursor: pointer;
  padding: 5px 10px;
}

/* Add a bit of color for visual appeal */
.completed {
  color: green;
}
</style>
