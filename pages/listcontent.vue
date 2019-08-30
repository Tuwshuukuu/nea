<template>
    <v-container>
        <v-layout wrap row >
            <v-flex lg3 xs12 class="px-2">
                 <v-card class="pa-3">
                    <span class="font-weight-black headline black--text pl-3">Бидний тухай</span>
                    <v-list dense>
                        <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            :class="contentId == item.id ? 'submenu_list_active' : 'submenu_list'">
                            <v-list-tile-content>
                                <v-list-tile-title v-on:click="changeItems(item.id)">{{ item.name }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg9 xs12 class="px-2">
                <v-card class="pa-3">
                    <span class="font-weight-black title black--text">Бидний тухай</span>
                    <v-layout column v-for="(item, i) in newsList" :key="i" class="news_list pa-3">
                        <div class="mb-2" >
                            <span class="font-weight-bold">{{item.title}}</span>
                            <!--<span class="grey--text text-right">{{item.date}}</span>-->
                        </div>
                        <v-layout wrap row>
                            <v-flex xs4>
                                <v-img
                                class="mx-1"
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                                >
                                </v-img>
                            </v-flex>
                            <v-flex xs8>
                                <div class="text--primary mx-2">
                                    <div v-html="item.intro_text"></div><br />
                                    <v-btn class="my-2" outline color="indigo">Дэлгэрэнгүй</v-btn>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>

import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

  export default {
    data () {
      return {
        contentId: 0,
        items: [],
        pageTitle: "",
        contentId: 0,
        newsList: [],
      }
    },
    created() {
        this.contentId = this.$route.params.id
        console.log(this.$route.params.id);
    },
    mounted(){
        console.log("mounted");
        this.loadSideMenu();
        this.loadMainContent(this.contentId);
    },  
    methods: {
        changeItems: function(index){
            this.contentId = index;
            console.log("changed", index);
            console.log("changed", this.contentId);
            this.loadMainContent(index);
        },
        loadSideMenu: function(){
            Vue.http.get('http://192.168.0.116:5000/r/subCategory/' + this.contentId).then(this.successCallbackMenu, error => {console.log});
        },
        successCallbackMenu: function(result){
            console.log("success", result.body.data);
            this.items = result.body.data;
        },
        loadMainContent: function(newsId){
            Vue.http.get('http://192.168.0.116:5000/r/subCategoryPosts/' + newsId).then(this.successCallback, error => {console.log});
        },
        successCallback: function(result){
            console.log("success", result.body.data);
            this.newsList = result.body.data;
        },
    }

  }
</script>