<template>
    <div class="login">
        <form class="form" @submit.prevent="login">
            <h1>Login</h1>
            <label for="username">User name</label>
            <input v-model="username" name="username" type="text" class="input">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="text" class="input">
            <button class="btn">Login</button>
        </form>
    </div>
</template>


<!-- Using Options API -->
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },

    methods: {
        login() {
            window.user = this.username
            const redirectPath = this.$route.query.redirect || '/protected'
            console.log("Check redirect path: ", redirectPath)
            this.$router.push(redirectPath)
        }
    }
}
</script>