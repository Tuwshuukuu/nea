<template>
  <v-container>
    <v-layout wrap row>
      <v-flex lg3 xs12 class="px-2">
        <v-card class="pa-3">
          <span class="font-weight-black headline black--text pl-3">{{ lang === 'mn' ? title: titleEn }}</span>
          <v-list dense>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              :class="subCat == item.id ? 'submenu_list_active' : 'submenu_list'"
            >
              <v-list-tile-content v-on:click="changeItems(item.id)">
                <v-list-tile-title>{{ lang === 'mn' ? item.name : item.name_eng }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-flex>
      <v-flex lg9 xs12 class="px-2">
        <v-card class="pa-3">
          <span class="font-weight-black title black--text">{{ lang === 'mn' ? subtitle: subtitleEn }}</span>
          <v-layout
            column
            v-for="(item, i) in newsList.slice(this.currentPage * this.pageSize, (this.currentPage + 1) * this.pageSize)"
            :key="i"
            hide-actions
            class="news_list pa-3"
          >
            <div v-if="lang === 'mn' || item.title_eng.length > 0">
              <div class="mb-2">
              <span class="font-weight-bold">{{ lang === 'mn' ? item.title : item.title_eng }}</span>
            </div>
            <v-layout wrap row>
              <v-flex xs4>
                <v-img
                  class="mx-1"
                  height="200px"
                  v-bind:src="
                      item.image_name === null ? `${origin}/images/placeholder.jpg`: convertImageUrl(item.image_name)"
                ></v-img>
              </v-flex>
              <v-flex xs8>
                <div class="text--primary mx-2">
                  <div v-html="lang === 'mn' ? item.intro_text : intro_text_eng"></div>
                  <br />
                  <v-btn
                    class="my-2"
                    outline
                    color="indigo"
                    @click="goTodetail(item.category_id, item.sub_category, item.id)"
                  >{{ lang === 'mn' ? 'Дэлгэрэнгүй' : 'Read More' }}</v-btn>
                </div>
              </v-flex>
            </v-layout>
            </div>
          </v-layout>
          <div class="text-right mt-3">
            <v-pagination v-model="page" :length="this.pageCount" @input="next" circle></v-pagination>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Vue from "vue";
import VueResource from "vue-resource";
import NewsDetail from "../pages/newsDetail";
import { environment } from "../config/environment";

Vue.use(VueResource);

export default {
  data() {
    return {
      contentId: 0,
      items: [],
      pageTitle: "",
      newsList: [],
      title: "no title",
      subtitle: "no title",
      subCat: 0,
      pageCount: 0,
      pageSize: 5,
      currentPage: 0,
      page: 1,
      lang: "",
      origin: '',
      subtitleEn: '',
      titleEn: '',
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
    console.log(window.origin);
    this.origin = window.origin;
  },
  methods: {
    next(page) {
      this.currentPage = page;
    },
    convertImageUrl: function(url) {
      return `${environment.API_HOST}/uploads/${url}`;
    },
    goTodetail(catId, subCatId, postId) {
      this.$router.push({ path: `/newsDetail/${catId}/${subCatId}/${postId}` });
    },
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
      // console.table(this.items);
    },
    loadMainContent: function(newsId) {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/subCategoryPosts/${newsId}`)
        .then(this.successCallback, error => {
          console.log;
        });
    },
    successCallback: function(result) {
      this.newsList = result.body.data;
      this.pageCount = Math.ceil(this.newsList.length / this.pageSize);
      this.newsList.map(item => {
        this.title = item.category;
        this.titleEn = item.categoryEn;
        this.subtitle = item.subCategoryName;
        this.subtitleEn = item.subCategoryNameEn;
      });
    }
  }
};
</script>
