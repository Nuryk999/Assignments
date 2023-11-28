<!-- TaskManagementApp.vue in TaskManagementApp folder -->

<template>
  <div class="profile-container">
    <div class="user-details">
      <h2>User Profile</h2>
      <img :src="user.profilePicture" alt="Profile Picture" class="profile-picture" />
      <p>Name: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Role: {{ user.isAdmin ? 'Admin' : 'Regular User' }}</p>

      <!-- Conditional rendering based on user role -->
      <p>{{ user.isAdmin ? 'Welcome, Admin!' : 'Welcome, User!' }}</p>

      <!-- Form for editing profile information -->
      <form @submit.prevent="updateProfile">
        <label for="name">Name:</label>
        <input v-model="user.name" type="text" id="name" required />

        <label for="email">Email:</label>
        <input v-model="user.email" type="email" id="email" required />

        <!-- Event handling for updating profile picture -->
        <label for="profile-picture">Profile Picture URL:</label>
        <input v-model="user.profilePicture" type="text" id="profile-picture" />
        <button @click="updateProfilePicture">Update Profile Picture</button>

        <button type="submit">Update Profile</button>
      </form>
    </div>

    <!-- Display user's age using computed property -->
    <p>User's Age: {{ userAge }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'John Doe',
        email: 'john@example.com',
        profilePicture: 'https://placekitten.com/200/200', // Default profile picture
        birthdate: '1990-01-01',
        isAdmin: false,
      },
    };
  },
  computed: {
    // Computed property to calculate user's age based on birthdate
    userAge() {
      const birthYear = new Date(this.user.birthdate).getFullYear();
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    },
  },
  methods: {
    // Method for updating the user's profile
    updateProfile() {
      // Perform any necessary update logic here
      // For simplicity, let's log a message
      console.log('User profile updated:', this.user);
    },

    // Method for updating the user's profile picture
    updateProfilePicture() {
      // For simplicity, let's use a placeholder image
      this.user.profilePicture = 'https://placekitten.com/200/200';
    },
  },
  watch: {
    // Watcher to log a message when user details are modified
    user: {
      handler(newValue, oldValue) {
        console.log('User details modified:', newValue);
      },
      deep: true,
    },
  },
  // Lifecycle hook to fetch user data when the component is created
  created() {
    // Fetch user data from an API or other source
    // For simplicity, let's use static data
    this.user = {
      name: 'John Doe',
      email: 'john@example.com',
      profilePicture: 'https://placekitten.com/200/200',
      birthdate: '1990-01-01',
      isAdmin: false,
    };
  },
};
</script>

<style>
.profile-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

.user-details {
  margin-bottom: 20px;
}

.profile-picture {
  max-width: 200px;
  border-radius: 50%;
  margin-bottom: 10px;
}

form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

button {
  margin-top: 10px;
  cursor: pointer;
}
</style>
