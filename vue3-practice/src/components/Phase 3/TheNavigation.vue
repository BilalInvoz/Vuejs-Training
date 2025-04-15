<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue Training App</router-link>
    <router-link v-for="destination in destinations" :key="destination.id"
      :to="{ name: 'Destination', params: { id: destination.id, slug: destination.slug } }">
      {{ destination.name }}
    </router-link>
  </div>
</template>

<script>
import sourceData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourceData.destinations
    }
  }
}
</script>