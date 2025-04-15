<template>
    <!-- Used directive v-if for destination so that no error if api is not finished yet -->
    <!-- <section class="destination" v-if="destination"> -->
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
            <!-- {{ console.log("Check destination: ", destination) }} -->
        </div>
    </section>
</template>

<script>
import sourceData from '@/data.json';
export default {

    // Here data was created with destination property as null so that we can assign it directly from the api response
    // data() {
    //     return {
    //         destination: null
    //     }
    // },

    // Using props for route other than $route.params.id
    props: {
        id: {type: Number, required: true}
    },
    computed: {
        
        // This destinationId needs to be removed/commented out if using props
        // destinationId() {
        //     return parseInt(this.$route.params.id)
        // },

        destination() {
            return sourceData.destinations.find((item) => item.id === this.id)
        }
    },

    // Method created for avoiding duplicate logic in created hook
    // methods: {
    //     async initData() {
    //         const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`, {redirect: 'follow'});

    //         if (!response.ok) {
    //             throw new Error(`HTTP error! status: ${response.status}`);
    //         }

    //         // Manually parse response as JSON regardless of content type
    //         this.destination = await response.json();
    //     },
    // },

    // Hook created to work on reacting on params change in route
    // async created() {
    //     try {
    //         await this.initData()
            
    // Watch applied so that data will be rendered accurate as per route params
    // We will use another approach using key attribute in router-view which will work almost same as watch but will take a bit more than watch

    //         this.$watch(() => this.$route.params, this.initData)
    //     }
    //     catch (error) {
    //         console.error("Fetch error:", error);
    //         // Handle error appropriately, e.g., display an error message to the user
    //     }
    // }
}
</script>