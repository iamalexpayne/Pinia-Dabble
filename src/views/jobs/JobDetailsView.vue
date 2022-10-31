<script setup>
import { useJobsStore } from '../../stores/jobs';
import { useRouter } from 'vue-router'

const store = useJobsStore()
const router = useRouter()
const props = defineProps(['id', 'slug'])

const job = store.jobs.find(job => {
  return job.id === props.id
})
</script>

<template>
  <button @click="router.back">Back</button>
  <h1>{{ job.title }}</h1>
  <p>{{ job.description }}</p>
</template>