<template>
    <div>
        <h1>Table in Vue js here</h1>
        <div v-html="header"></div>
        <table border="2px">
            <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                </tr>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    data() {
        return {
            users: [
                { id: 1, name: 'Ali', email: 'ali@gmail.com' },
                { id: 2, name: 'Ahmad', email: 'ahmad@gmail.com' },
                { id: 3, name: 'Akmal', email: 'akmal@gmail.com' },
                { id: 4, name: 'Atif', email: 'atif@gmail.com' },
            ],
            header: "<h2>Table below under construction</h2>"
        }
    }
}
</script>