<template>
    <div>
        <div wrap row style="background-color: #0055b7!important;"
            height="40">
            <v-container class="pa-0">
                <div style="text-align: right;">
                    <v-btn
                        class="robotoCondensed font-weight-bold subtitle-2 white--text ma-0"
                        flat
                    >MGL</v-btn>   
                    <v-btn
                        class="robotoCondensed font-weight-bold subtitle-2 white--text ma-0"
                        flat
                    >EN</v-btn>
                </div>
            </v-container>
        </div>
        <v-container class="pa-0">
            <!-- Logo -->
            <v-layout wrap row class="px-4">
                <nuxt-link to="/">
                    <v-img
                        width="180px"
                        max-width="180px"
                        height="90px"
                        src="/images/logo.png"
                        position="left center"
                        contain
                    ></v-img>
                </nuxt-link>
                <v-spacer></v-spacer>
                <span class="ma-4 main-color">Холбоо барих</span>
            </v-layout>
        </v-container>
    </div>
</template>