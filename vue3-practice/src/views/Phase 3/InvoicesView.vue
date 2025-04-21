<template>
    <div>
        <h1>
            Hi {{ user }}!, You are now on Invoices Page
        </h1>
    </div>
</template>

<script>
import { onBeforeRouteLeave } from 'vue-router'

export default {
    setup() {
        const user = window.user

        // For making user to stick to this page and confirm if really want to leave
        onBeforeRouteLeave((to, from) => {
            const userAnswer = window.confirm('Are you sure to leave this page ?')
            console.log("To before leave: ", to)
            console.log("From before leave: ", from)

            if(!userAnswer) return false
        })

        return {user}
    }
}
</script>