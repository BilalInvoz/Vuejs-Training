<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <router-link to="/home">Home</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/styleComponent">Styles Component</router-link>
    <router-link to="/counter">Counter</router-link>
    
    <router-view></router-view>

    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <HomeComponent userName="first Vue name"/> -->
    <!-- <TableComponent /> -->
     <!-- <StyleComponent /> -->
    <!-- <CounterParent /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from './components/Home.vue'
// import TableComponent from './components/Table.vue'
// import StyleComponent from './components/StyleComponent.vue';
// import CounterParent from './components/ParentCounter.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomeComponent,
    // TableComponent,
    // StyleComponent,
    // CounterParent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
