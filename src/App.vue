<script>
import Header from './components/site/Header.vue';

 export default {
    components: { 
      Header ,
    }
}
</script>
<template>
    <Header/>
    <RouterView/>
</template>