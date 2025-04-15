<template>
    <div>
        <h1>
            Child Counter project
        </h1>
        <h3>
            Counter number: {{ modelValue }}
        </h3>
        <span>
            <button v-on:click="addFunc">Add</button>
            <button v-on:click="reduceFunc" v-bind:disabled="modelValue === 0">Reduce</button>
        </span>
    </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
    name: 'ChildComponent',
    props: {
        modelValue: Number
    },
    setup(props, {emit}) {
        console.log("Check props from composition api: ", props)
        const {modelValue} = toRefs(props)
        console.log("Model value from props destructure: ", modelValue)

        const addFunc = () => {
            console.log("Value add: ", modelValue.value)
            console.log("Adding with composition api...")
            emit("update:modelValue", modelValue.value + 1)
            console.log("Updated value: ", modelValue)
        }

        const reduceFunc = () => {
            console.log("Value reduce: ", modelValue.value)
            console.log("Reduce with composition api...")
            emit("update:modelValue", modelValue.value - 1)
            console.log("Reduced value: ", modelValue)
        }

        return {
            addFunc,
            reduceFunc,
        }
    }
    // methods: {
    //     addFunc() {
    //         console.log("Working on add counter")
    //         this.$emit("update:modelValue", this.modelValue + 1)
    //         // this.counter++;
    //         // this.counterNumber = this.counterNumber + 1
    //     },
    //     reduceFunc() {
    //         console.log("Working on reduce counter")
    //         this.$emit("update:modelValue", this.modelValue - 1)
    //         // this.counter--;
    //     }
    // }
}
</script>
<!-- <script>
export default {
    name: 'ChildComponent',
    props: {
        modelValue: Number
    },
    methods: {
        addFunc() {
            console.log("Working on add counter")
            this.$emit("update:modelValue", this.modelValue + 1)
            // this.counter++;
            // this.counterNumber = this.counterNumber + 1
        },
        reduceFunc() {
            console.log("Working on reduce counter")
            this.$emit("update:modelValue", this.modelValue - 1)
            // this.counter--;
        }
    }
}
</script> -->