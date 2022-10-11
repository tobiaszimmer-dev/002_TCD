<template>
    <nav>
        <div>
            <router-link :to="item.slug" v-for="item in data" :key="item">{{ item.display }}</router-link>
        </div>
        <div>
            <router-link :to="item.slug" v-for="item in data" :key="item">{{ item.display }}</router-link>
        </div>
    </nav>
</template>
<script>

export default {
props: {'data':Array, 
        'color-primary':{
            type: String, 
            required: false,
            default: '#fff'}, 
        'color-secondary':{
            type: String, 
            required: false, 
            default: '#000'},},
}
</script>
<style scoped>
    nav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        height: 4rem;
        background-color: var(--color-primary);
        color: var(--color-second);
        margin: 0;
        align-items: center;
    }
    nav>div{
        display: flex;
        width: 50%;
        padding: 0 4rem;
    }
    nav>div:last-child{
        justify-content: right;
    }
    a{
        padding: 0 3rem;
    }
    a:any-link{
        color: var(--color-white);
    }
</style>