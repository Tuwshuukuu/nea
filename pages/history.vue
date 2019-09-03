<template>
    <v-container>
        <v-layout wrap row >
            <v-flex lg3 xs12 class="px-2">
                 <v-card class="pa-3">
                    <span class="font-weight-black headline black--text pl-3">{{ title }}</span>
                    <v-list dense>
                        <v-list-tile
                            v-for="item in items"
                            :key="item.title"
                            :class="subCat == item.id ? 'submenu_list_active' : 'submenu_list'">
                            <v-list-tile-content v-on:click="changeItems(item.id)">
                                <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex lg9 xs12 class="px-2">
                <v-carousel
                    cycle
                    height="400"
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <v-carousel-item
                        v-for="(item, i) in mainContent"
                        :key="i"
                        >
                        <v-row
                            class="fill-height pa-5"
                            align="center"
                            justify="center"
                            >
                            <div class="display-3">{{ item.title }} </div>
                            <div v-html="item.intro_text"></div>
                        </v-row>
                    </v-carousel-item>
                </v-carousel>
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
        mainContent: [],
        title: "no title",
        subCat: 0
      }
    },
    created() {
        this.contentId = this.$route.params.id
        this.subCat = this.$route.params.subCat;
        console.log(this.$route.params.id);
    },
    mounted(){
        console.log("mounted");
        this.loadSideMenu();
        this.loadMainContent(this.subCat);
    },  
    methods: {
        changeItems: function(index){
            this.subCat = index;
            console.log("changed", index);
            console.log("changed", this.contentId);
            this.loadMainContent(index);
            history.pushState({}, null, index);
            // this.mainContent.map((item, i) => {
            //     if(item.id === index){
            //         this.contentHTML = item
            //         console.log(this.contentHTML);
            //     }
            // });
        },
        loadSideMenu: function(){
            Vue.http.get('http://192.168.0.116:5000/r/subCategory/' + this.contentId).then(this.successCallbackMenu, error => {console.log});
        },
        successCallbackMenu: function(result){
            this.items = result.body.data;
            this.title = result.body.data[0].categoryMN;
        },
        loadMainContent: function(newsId){
            Vue.http.get('http://192.168.0.116:5000/r/subCategoryPosts/' + newsId).then(this.successCallback, error => {console.log});
        },
        successCallback: function(result){
            console.log("success", result.body.data);
            this.mainContent = result.body.data;
            // this.contentHTML = result.body.data[0];

            // this.mainContent.map((item) => {
            //     var sideMenuItem = {name: item.title || "no title", id: item.id};
            // });
        },
    }

  }
</script>