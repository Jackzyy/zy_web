<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-if="!$route.meta.weMedia"></Footer>
        <FooterM v-else></FooterM>
    </div>
</template>

<script>
import Header from '@/views/Pc/common/Header'
import Footer from '@/views/Pc/common/Footer'
import FooterM from '@/views/Pc/common/FooterM'
export default {
  components:{
    Header,
    Footer,
    FooterM
  },
}
</script>

<style scoped>

</style>