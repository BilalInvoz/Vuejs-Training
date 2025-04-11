<template>
    <div>
        <h1 class="style">
            Making Simple styling using class name
        </h1>
        <h1 v-bind:style="{backgroundColor: 'skyblue', color: 'white'}">
            Style using bind:style
        </h1>
        <h1 v-bind:class="{display: enableClass}">
            Style using conditional class
        </h1>
        <div>
            <button v-on:click="makeTrue">
                Click to enable css class
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StyleComponent',
    data() {
        return {
            enableClass: false
        }
    },
    methods: {
        makeTrue() {
            this.enableClass = !this.enableClass
        }
    }
}
</script>

<style>
.style {
    color: rgb(116, 196, 118);
}
.display {
    background-color: burlywood;
    color: coral;
}
</style>