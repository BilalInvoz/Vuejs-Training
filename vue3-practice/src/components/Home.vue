<template>
    <div>
    <h1>
        This is my first vue training from components folder
    </h1>
    <h1>
        My name is {{userName}}!
    </h1>
    <h1 v-once>
        My mutated text is {{ changeName }}!
    </h1>
    <h1>
        My mutated text is {{ changeName }}!
    </h1>
    <button v-on:click="mutate">Click to mutate text</button>
    <button v-on:click="firstEvent(userName)" v-on:mouseover="hover()">Click to Vue Event for {{ userName }}</button>
    <h2 v-if="isToggle">This is conditional if check for toggle</h2>
    <h2 v-else>This is conditional else check for toggle</h2>
    <h2>{{ isToggle ? 'Yes toggle' : 'No toggle' }}</h2>
    <button v-on:click="toggleBtn()">Toggle</button>
    {{ console.log($route) }}
</div>
</template>

<script>
export default {
    name: 'HomeComponent',
    props: {
        userName: String,
    },
    data() {
        return {
            isToggle: true,
            changeName: this.userName
        }
    },
    methods: {
        firstEvent(name) {
            alert(`First Vue event hit with user name: ${name}`)
        },
        hover() {
            console.log("Check hover working...")
        },
        toggleBtn() {
            this.isToggle = !this.isToggle
        },
        mutate() {
            this.changeName = 'Mutated...'
        }
    }
}
</script>