<template>
  <Nav :data="navList"></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from './components/layout/nav.vue';

export default {
    data(){
        return{
            navList: ['Item 1', 'Item 2', 'Item 3'],
        }
    },
    components: { Nav }
}
</script>

<style>
*{
  --color-primary: green;
  --color-second: red;
  --color-white: #fff;
  --color-black: #3d3d3d;
  padding: 0;
  margin: 0;
}

</style>