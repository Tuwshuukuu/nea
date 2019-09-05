<template>
    <v-container>
        <v-layout wrap row >
            <v-flex lg3 xs12 class="px-2">
                <!-- <span class="font-weight-black headline black--text">Гадаад мэдээ</span> -->
                <v-card class="pa-3">
                    <span class="font-weight-black headline black--text pl-3">{{ this.subCategoryName }}</span>
                    <v-list dense>
                        <v-list-tile
                            v-for="item in items.slice(0, 10)"
                            :key="item.title"
                            :class="subCat == item.id ? 'submenu_list_active' : 'submenu_list'">
                            <v-list-tile-content v-on:click="changeItems(item.id)">
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg9 xs12 class="px-2">
                <v-card v-for="(item, i) in newsDetails" :key="i">
                    <v-card-title class="font-weight-bold mx-auto">{{ item.title }}</v-card-title>
                    <v-img
                    class="mx-5"
                    height="300px"
                    v-bind:src = "convertImageUrl(item.image_name)"
                    >
                    </v-img>
                    <div class="text--primary pa-3 mt-3">
                        <div v-html="item.full_text"></div>
                    </div>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
  import Vue from "vue";
import VueResource from "vue-resource";
import { environment } from '../config/environment';

Vue.use(VueResource);
  export default {
    data () {
      return {
        contentId: 0,
        items: [],
        newsDetails: [],
        subCategoryName: "No title",
        postId: 0,
        subCatId: 0
      }
    },
    created() {
        this.contentId = this.$route.params.id
        this.postId = this.$route.params.postId;
        this.subCatId = this.$route.params.subCatId;
    },
    mounted(){
        console.log('route', this.$route);
        this.loadSideMenu();
        this.loadMainContent(this.contentId, this.postId);
    },  
    methods: {
        convertImageUrl: function(url){
            return `${environment.API_HOST}/news/${url}`;
        },
        changeItems: function(id){
            this.loadMainContent(this.contentId, id);
            this.postId = id;
            history.pushState({}, null, id);
        },
        loadSideMenu: function(){
            Vue.http.get(`${environment.API_HOST}:5000/r/subCategoryPosts/${this.subCatId}`).then(this.successCallbackMenu, error => {console.log});
        },
        successCallbackMenu: function(result){
            this.items = result.body.data;
            this.subCategoryName = result.body.data[0].subCategoryName;
        },
        loadMainContent: function(contentId, postId){
            Vue.http.get(`${environment.API_HOST}:5000/r/news/${contentId}/${postId}`).then(this.successCallback, error => {console.log});
        },
        successCallback: function(result){
            this.newsDetails = result.body.data;
        },
    }
  }
</script>