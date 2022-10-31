<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>

<template>
  <main>
    <h1>Home Stuff</h1>
    <div>
      <h2>Clicked It: {{ store.count }}</h2>
      <h2>That x 2 is: {{ store.doubleCount }}</h2>
    </div>
  </main>
</template>
