// main.js in TaskManagementApp folder

import { createApp } from 'vue';
import TaskManagementApp from './TaskManagementApp.vue';

const app = createApp(TaskManagementApp);

// Mount the app on the div with id "task-management-app"
app.mount('#task-management-app');
