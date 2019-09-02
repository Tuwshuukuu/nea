<template>
    <v-app class="white">
        <AppBar />
        <headerMenu />
        <v-content>
            <nuxt />
        </v-content>
        <Footer />
    </v-app>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import headerMenu from '~/components/headerMenu.vue'
import Footer from '~/components/Footer.vue'
export default {
    components: {
        AppBar,
        headerMenu,
        Footer
    }
}
</script>
