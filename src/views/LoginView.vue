<script setup lang="ts">
import { ref } from "vue";

const username = ref<string>("");
const password = ref<string>("");

const onSubmit = () => {
  console.log("submit", {
    username: username.value,
    password: password.value,
  });
};
</script>

<template  >
  <section class="my-20 max-w-screen-sm mx-auto border-2 px-4 py-5 rounded-md shadow-sm  border-blue-300 ">


  <h1 class=" text-4xl font-bold text-center text-">Sign In</h1>
  <div >
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="Username"
          label="Username"
          placeholder="Username"
          :rules="[{ required: true, message: 'Username is required' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="Password"
          label="Password"
          placeholder="Password"
          :rules="[{ required: true, message: 'Password is required' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          Sign in
        </van-button>
      </div>
    </van-form>
  </div>
</section>
</template>
