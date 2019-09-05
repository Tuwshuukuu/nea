<template>
  <div>
    <div wrap row style="background-color: #0055b7!important;" height="40">
      <v-container class="pa-0">
        <div style="text-align: right;">
          <v-btn
            class="robotoCondensed font-weight-bold subtitle-2 white--text ma-0"
            flat
            v-on:click="changeLanguage('mn')"
          >MGL</v-btn>
          <v-btn
            class="robotoCondensed font-weight-bold subtitle-2 white--text ma-0"
            flat
            v-on:click="changeLanguage('en')"
          >EN</v-btn>
        </div>
      </v-container>
    </div>
    <v-container class="pa-0">
      <!-- Logo -->
      <v-layout wrap row class="px-4 appbar">
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
        <span class="ma-4 main-color contact ">{{ lang === 'mn' ? 'Холбоо барих' : 'Contact' }}</span>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: ""
    };
  },
  methods: {
    changeLanguage(name) {
      localStorage.setItem("lang", name);
      this.lang = localStorage.getItem('lang');
      location.reload();
          }
  }
};
</script>