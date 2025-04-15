<template>
    <div class="home">
        <h1>Welcome To Home</h1>
        <h1>All Destinations are presented here</h1>
        <div class="destinations">
            <router-link v-for="destination in destinations" :key="destination.id" :to="{name: 'Destination', params: {id: destination.id, slug: destination.slug}}">
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" alt="destination.name">
            </router-link>
        </div>
    </div>
</template>

<script>
// Variable name set to sourceData for data in data.json file for performing actions
import sourceData from '@/data.json';
export default {
    setup() {
        return {
            destinations: sourceData.destinations
        }
    }
}
</script>