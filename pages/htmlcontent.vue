<template>
  <v-container>
    <v-layout wrap row>
      <v-flex lg3 xs12 class="px-2">
        <v-card class="pa-3">
          <span class="font-weight-black headline black--text pl-3">{{ title }}</span>
          <v-list dense>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :class="contentId == item.id ? 'submenu_list_active' : 'submenu_list'"
            >
              <v-list-tile-content v-on:click="changeItems(item.id)">
                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex lg9 xs12 class="px-2">
        <v-card class="pa-4">
          <h2 class="mb-3">{{contentHTML.title || "No title"}}</h2>
          <div v-html="this.contentHTML.intro_text"></div>
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
      subCat: 0
    };
  },
  created() {
    this.contentId = this.$route.params.id;
    this.subCat = this.$route.params.subCat;
    console.log(this.$route.params.id);
  },
  mounted() {
    this.loadSideMenu();
    this.loadMainContent(this.subCat);
  },
  methods: {
    changeItems: function(index) {
      this.contentId = index;
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
      console.log("success", result.body.data);
    },
    loadMainContent: function(newsId) {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/subCategoryPosts/${newsId}`)
        .then(this.successCallback, error => {
          console.log;
        });
    },
    successCallback: function(result) {
      this.mainContent = result.body.data;
      this.contentHTML = result.body.data[0];

      this.mainContent.map(item => {
        var sideMenuItem = { name: item.title || "no title", id: item.id };
        this.title = item.category || "no title";
        this.items.push(sideMenuItem);
      });
    }
  }
};
</script>