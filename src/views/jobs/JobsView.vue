<script setup>
import slugify from 'slugify'
import { useJobsStore } from '@/stores/jobs'
import { RouterLink } from 'vue-router'

const store = useJobsStore()
</script>

<template>
  <h1>Jobs</h1>
  <ul>
    <li v-for="(job) in store.jobs" :key="job.id">
      <RouterLink class="job-link" :to="{
        name: 'JobDetails',
        params: { slug: slugify(job.title, { lower: true }), id: job.id }
      }">
        <h2>{{ job.title }}</h2>
      </RouterLink>
      <p>{{ job.description }}</p>
    </li>
  </ul>
</template>

<style>
li {
  list-style-type: none;
  padding-bottom: 2rem;
}
.job-link {
  text-transform: capitalize;
}
.job-link:hover {
  text-decoration: underline;
}
</style>