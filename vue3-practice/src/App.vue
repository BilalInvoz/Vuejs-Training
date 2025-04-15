<!-- Phase 1 and Phase 2 and basis of router from Phase 3 till line no.38 -->
<!-- <template> -->
<!-- <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <router-link to="/home">Home</router-link>
    <router-link to="/table">Table</router-link>
    <router-link to="/styleComponent">Styles Component</router-link>
    <router-link to="/counter">Counter</router-link>
    
    <router-view></router-view> -->

<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
<!-- <HomeComponent userName="first Vue name"/> -->
<!-- <TableComponent /> -->
<!-- <StyleComponent /> -->
<!-- <CounterParent /> -->
<!-- </div> -->
<!-- </template> -->

<!-- <script> -->
<!-- // import HelloWorld from './components/HelloWorld.vue'
// import HomeComponent from './components/Home.vue'
// import TableComponent from './components/Table.vue'
// import StyleComponent from './components/StyleComponent.vue';
// import CounterParent from './components/ParentCounter.vue' -->

<!-- export default {
  name: 'App',
  components: {
    // HelloWorld,
    // HomeComponent,
    // TableComponent,
    // StyleComponent,
    // CounterParent
  } -->
<!-- } -->
<!-- </script> -->


<template>
  <div>
  <TheNavigation />

    <div class="container">
      <router-view></router-view>

      <!-- Alternate approach using key below than to use watch() -->
      <!-- <router-view :key="$route.path"></router-view> -->
    </div>
  </div>
</template>

<script>
import TheNavigation from './components/Phase 3/TheNavigation.vue'
export default {
  components: {
    TheNavigation
  }
}
</script>