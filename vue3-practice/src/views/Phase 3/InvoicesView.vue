<template>
    <div>
        <h1>
            Hi {{ user }}!, You are now on Invoices Page
        </h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: window.user
        }
    }
}
</script>