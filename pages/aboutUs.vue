<template>
  <v-container>
    <v-layout wrap row>
      <v-flex lg3 xs12 class="px-2">
        <v-card class="pa-3">
          <span
            class="font-weight-black headline black--text pl-3"
          >{{ lang === 'mn' ? title.categoryMN : title.categoryENG }}</span>
          <v-list dense>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :class="contentId == item.id ? 'submenu_list_active' : 'submenu_list'"
            >
              <v-list-tile-content v-on:click="changeItems(item.id)">
                <v-list-tile-title>{{ lang === 'mn' ? item.name : item.name_eng }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex lg9 xs12 class="px-2">
        <v-card class="pa-4">
          <h2 class="mb-3">{{ lang === 'mn' ? contentHTML.title : contentHTML.title_eng || "No title"}}</h2>
          <div v-html="this.lang === 'mn' ? this.contentHTML.intro_text: this.contentHTML.body_eng"></div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import { environment } from "../config/environment";

Vue.use(VueResource);
export default {
  data() {
    return {
      contentId: 0,
      items: [],
      mainContent: [],
      contentHTML: {},
      title: "no title",
      subCat: 0,
      lang: ""
    };
  },
  created() {
    this.contentId = this.$route.params.id;
    this.subCat = this.$route.params.subCat;
  },
  mounted() {
    this.loadSideMenu();
    this.loadMainContent(this.subCat);
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    changeItems: function(index) {
      this.contentId = index;
      this.loadMainContent(index);
      history.pushState({}, null, index);
      this.mainContent.map((item, i) => {
        if (item.id === index) {
          this.contentHTML = item;
        }
      });
    },
    loadSideMenu: function() {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/subCategory/${this.contentId}`)
        .then(this.successCallbackMenu, error => {
          console.log;
        });
    },
    successCallbackMenu: function(result) {
      this.items = result.body.data;
      this.title = result.body.data[0];
    },
    loadMainContent: function(newsId) {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/subCategoryPosts/${newsId}`)
        .then(this.successCallback, error => {
          console.log;
        });
    },
    successCallback: function(result) {
      console.log("success", result.body.data);
      this.mainContent = result.body.data;
      this.contentHTML = result.body.data[0];

      this.mainContent.map(item => {
        var sideMenuItem = { name: item.title || "no title", id: item.id };
      });
    }
  }
};
</script>x