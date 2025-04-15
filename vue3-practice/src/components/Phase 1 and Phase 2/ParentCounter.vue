<template>
    <div>
        <h1>
            Counter project
        </h1>
        <ChildComponent v-model="counter" />
    </div>
</template>

<script>
import { ref } from 'vue';
import ChildComponent from './ChildCounter.vue';
export default {
    name: 'CounterParent',
    components: {
        ChildComponent
    },
    setup() {
        const counter = ref(0);

        return {
            counter
        }
    }
}
</script>
<!-- <script>
import ChildComponent from './ChildCounter.vue';
export default {
    name: 'CounterParent',
    components: {
        ChildComponent
    },
    data() {
        return {
            counter: 0
        }
    }
}
</script> -->