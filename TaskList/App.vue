<template>
  <div class="app-container">
    <TaskList title="Incomplete Tasks" :tasks="incompleteTasks" />
    <TaskList title="Completed Tasks" :tasks="completedTasks" />

    <!-- Form to add new tasks -->
    <form @submit.prevent="addTask" class="form-container">
      <!-- Form fields -->
      <label for="title">Title:</label>
      <input v-model="newTask.title" type="text" id="title" required />

      <label for="completed">Completed:</label>
      <input v-model="newTask.completed" type="checkbox" id="completed" />

      <button type="submit">Add Task</button>
    </form>

    <!-- Total Incomplete and Completed Tasks -->
    <div class="totals-container">
      <p>Total Incomplete Tasks: {{ incompleteTasks.length }}</p>
      <p>Total Completed Tasks: {{ completedTasks.length }}</p>
    </div>
  </div>
</template>

<script>
import TaskList from 'src/TaskList/TaskList.vue';

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        // Add more tasks as needed
      ],
      newTask: {
        title: '',
        completed: false,
      },
    };
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter((task) => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.completed);
    },
  },
  methods: {
    addTask() {
      this.tasks.push({ ...this.newTask, id: this.tasks.length + 1 });
      this.newTask.title = '';
      this.newTask.completed = false;
    },
  },
};
</script>

<style>
.app-container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.form-container {
  margin-top: 20px;
}

.totals-container {
  margin-top: 20px;
}
</style>
