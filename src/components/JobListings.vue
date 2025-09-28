<script setup>
import { reactive, defineProps, onMounted } from "vue";
import { RouterLink } from "vue-router";
import Spinner from "./ui/Spinner.vue";
import Job from "./Job.vue";
import axios from "axios";
defineProps({
  limit: {
    type: Number,
  },
});
const state = reactive({
  jobs: [],
  isLoading: true,
});
const apiUrl = import.meta.env.VITE_API_URL;

onMounted(async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/jobs`);
    const jobs = res.data;
    state.jobs = jobs;
  } catch (error) {
    console.log("error fetching jobs ", error);
  } finally {
    state.isLoading = false;
  }
});
</script>
<template>
  <Spinner v-if="state.isLoading" />
  <section v-else class="bg-green-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
        Browse Jobs
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Job
          v-for="job in state.jobs.slice(0, limit)"
          :key="job._id"
          :job="job"
        />
      </div>
      <section v-if="limit" class="m-auto max-w-lg my-10 px-6">
        <RouterLink
          to="/jobs"
          class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
          >View All Jobs</RouterLink
        >
      </section>
    </div>
  </section>
</template>
