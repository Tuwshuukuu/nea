<template>
  <v-container>
    <v-layout wrap row>
      <v-flex lg3 xs12 class="px-2">
        <v-card class="pa-3">
          <span class="font-weight-black headline black--text pl-3">{{lang === 'mn' ? title: titleEn  }}</span>
          <v-list dense>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :class="subCat == item.id ? 'submenu_list_active' : 'submenu_list'"
            >
              <v-list-tile-content v-on:click="changeItems(item.id)">
                <v-list-tile-title>{{ lang === 'mn' ? item.name: item.name_eng }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex lg9 xs12>
        <v-card class="pa-3">
          <span class="font-weight-bold mx-auto">{{lang === 'mn' ? subtitle: subtitleEn  }}</span>
          <v-layout v-for="(item, i) in fileList" :key="i" class="border_bottom pa-3">
            <v-flex xs11>{{item.title}}</v-flex>
            <v-flex xs1>
              <a :href="item.extra" download>Татах</a>
            </v-flex>
          </v-layout>
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
      // pageTitle: "",
      fileList: [],
      title: "no title",
      subtitle: "no title",
      subCat: 0,
      lang: '',
      titleEn: '',
      subtitleEn: ''
    };
  },
  created() {
    this.contentId = this.$route.params.id;
    this.subCat = this.$route.params.subCat;
    console.log(this.$route.params.id);
  },
  mounted() {
    console.log("mounted");
    this.loadSideMenu();
    this.loadMainContent(this.subCat);
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    changeItems: function(index) {
      this.contentId = index;
      this.loadMainContent(index);
      history.pushState({}, null, index);
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
    },
    loadMainContent: function(newsId) {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/subCategoryPosts/${newsId}`)
        .then(this.successCallback, error => {
          console.log;
        });
    },
    successCallback: function(result) {
      this.fileList = result.body.data;

      this.fileList.map(item => {
        this.title = item.category;
        this.subtitle = item.subCategoryName;
        this.titleEn = item.categoryEn;
        this.subtitleEn = item.subCategoryNameEn;
      });
    }
  }
};
</script>
