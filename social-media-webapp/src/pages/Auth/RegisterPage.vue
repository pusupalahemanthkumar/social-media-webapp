<template>
  <div class="login-bg">
    <div class="login-form-main-container">
      <h1 class="text-center py-1">
        <span class="primary-color">Connect</span>People
      </h1>
      <p v-if="error" class="error-message">{{ error }}</p>
      <the-spinner v-if="isLoading"></the-spinner>
      <form
        class="login-form"
        @submit.prevent="registerHandler"
        enctype="multipart/form-data"
        v-else
      >
        <input
          type="text"
          placeholder="UserName"
          required
          name="UserName"
          minlength="4"
          v-model="userName"
        />
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          v-model="email"
        />
        <input
          type="file"
          placeholder="Profile Photo"
          required
          name="profile"
          @change="profileUploadHandler"
          ref="profile"
        />
        <img :src="profilePhoto" />
        <input
          type="date"
          placeholder="Date of Birth"
          required
          name="profile"
          v-model="dob"
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="email"
          v-model="password"
        />
        <button type="submit">SIGN UP</button>
        <p class="login-bottom-text text-center py-2">
          Already have an account?
          <router-link to="/login" class="primary-color"> Sign in!</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      userName: "",
      email: "",
      profileImage: null,
      dob: null,
      password: "",
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
  },
  created() {
    if (this.$store.getters.isAuthenticated) {
      this.$router.replace("/");
    }
  },
  methods: {
    async registerHandler() {
      this.isLoading = true;
      try {
        const payload = {
          userName: this.userName,
          email: this.email,
          profileImage: this.profileImage,
          dob: this.dob,
          password: this.password,
        };
        console.log(payload);
        await this.$store.dispatch("register", payload);
        this.isLoading = false;
        this.$router.replace("/");
      } catch (err) {
        this.error = err.message || "Failed to authenticate, try later.";
        this.isLoading = false;
      }
    },
    profileUploadHandler() {
      let files = this.$refs.profile.files[0];

      if (files) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.profileImage = e.target.result;
        };
        reader.readAsDataURL(files);
      }
      console.log(this.profilePhoto);
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}
.py-1 {
  padding: 1rem 0rem;
}
.primary-color {
  color: rgb(48, 88, 51);
}
/* Login  and Registration Styling Here */
.login-bg {
  /* background: url("https://i.pinimg.com/originals/20/99/f2/2099f2dda704cb708fe20347afb964ba.jpg")
    center center/cover; */
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.login-form-main-container {
  /* background: #f4f4f4; */
  max-width: 800px;
  margin: 10rem auto;
  padding: 2rem;
}
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login-form input {
  margin: 0.75rem 0;
  padding: 0.75rem 1rem;
  width: 90%;
  border-radius: 10px;
  background: #212224;
  outline: none;
  color: #cccc;
  border: none;
}
.login-form input::placeholder {
  color: #ccc;
}
.login-form input:focus {
  border: #ddd 2px solid;
}
.login-form input::placeholder {
  color: #fff;
}
.login-form button {
  width: 50%;
  padding: 0.75rem 1rem;
  background: #1a191f;
  border: rgb(48, 88, 51) 2px solid;
  border-radius: 10px;
  color: #fff;
  margin: 0.75rem 0;
  transition: 0.5s ease-in-out;
}
.login-form button:hover {
  color: rgb(48, 88, 51);
  border: #fff 2px solid;
}
.login-bottom-text {
  font-size: 0.85rem;
}
</style>
