<template>
    <v-app class="white">
        <AppBar />
        <headerMenu />
        <v-content>
            <nuxt />
        </v-content>
        <Fooder />
    </v-app>
</template>

<script>
import AppBar from '~/components/AppBar.vue'
import headerMenu from '~/components/headerMenu.vue'
import Fooder from '~/components/Fooder.vue'

export default {
    components: {
        AppBar,
        headerMenu,
        Fooder
    }
}
</script>
