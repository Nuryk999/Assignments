// main.js in TaskList folder

import { createApp } from 'vue';
import TaskList from './TaskList.vue';

const app = createApp(TaskList);

// Mount the app on the div with id "task-list-app"
app.mount('#task-list-app');
