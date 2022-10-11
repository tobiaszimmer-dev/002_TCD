<template>
    <BaseNav :data="navList"></BaseNav>
</template>
<script>
import BaseNav from '../ui/base-nav.vue';
export default {
    props: ['data'],
    components: { BaseNav },
    data(){
        return{
            navList: {
                item1: {
                    display: 'Verein',
                    slug: 'club'
                },
                item2: {
                    display: 'Events',
                    slug: 'events'
                },
                item3: {
                    display: 'Mitmachen',
                    slug: 'join-us'
                },
            },
        }
    }
}
</script>
<style>
    
</style>