<template>
  <v-container>
    <v-layout wrap row>
      <v-flex lg9 xs12>
        <Corausel />
      </v-flex>
      <v-flex lg3 xs12>
        <div class="mx-2">
          <div
            class="mb-2 pa-3 btn-stl text-center hover"
          >Цацрагын үүсгүүрийн бүртгэл, хяналтын систем</div>
          <div
            class="mb-2 pa-3 btn-stl text-center hover"
          >Гадаад орчны цацрагын түвшиний мэдээллийн сан</div>
          <div class="mb-2 pa-3 btn-stl text-center hover">Газарзүйн мэдээллийн сан</div>
          <div class="mb-2 pa-3 btn-stl text-center hover">Цацрагын мэдээллийн сан</div>
          <div class="mb-2 pa-3 btn-stl text-center hover">Цацрагын мэдээллийн сан</div>
          <div class="mb-2 pa-3 btn-stl text-center hover">Цацрагын мэдээллийн сан</div>
        </div>
      </v-flex>
    </v-layout>
    <!-- </v-carousel> -->
        <v-layout wrap row >
            <span class="font-weight-black headline black--text my-2">{{ lang === 'mn' ? 'Сүүлийн үеийн мэдээ': 'Latest News' }}</span>
            <v-layout wrap row class="lastest_news_row">
                <v-flex lg7 xs12>
                    <v-layout wrap row v-for="(item, i) in latestNews" :key="i" class="lastest_news my-3">
                        <v-flex xs12 sm6 lg4>
                            <v-img
                                class="border-radius"
                                height="200px" 
                                 v-bind:src="lang === 'mn' ?
                                  item.image_name === null ? '../images/placeholder.jpg': convertImageUrl(item.image_name)
                                  :
                                  item.title_eng.length !== 0 ? item.image_name === null ? '../images/placeholder.jpg': convertImageUrl(item.image_name) : ''">
                                </v-img>
                        </v-flex>
                        <v-flex xs12 sm6 lg8  class="pa-3" @click="goTodetail(item.category_id, item.sub_category, item.id)">
                            <span class="grey--text font-weight-bold subtitle-2 robotoCondensed">{{ lang === 'mn' ? item.created_at.slice(0, 10) : item.title_eng.length !== 0 ? item.created_at.slice(0, 10) : '' }}</span><br>
                            <span class="main-color title-text robotoCondensed">{{ lang === 'mn' ? item.title: item.title_eng }}</span><br><br>
                            <span class="subtitle-1" v-html="lang === 'mn' ? item.intro_text.slice(0,200): item.intro_text_eng"></span>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <v-flex lg5 xs12>
                    <v-layout wrap row>
                        <v-flex xs12 class="pb-3">
                            <v-img
                                height="100px"
                                src="/images/layor.png"
                                >
                                </v-img>
                        </v-flex>
                        <v-layout wrap row class="my-3 px-3">
                            <v-flex xs5 md5>
                                <span class="indigo--text my-4">Бидний тухай</span><br />
                                <span class="indigo--text my-4">Танилцуулга</span><br />
                                <span class="indigo--text my-4">{{ lang === 'mn' ? 'Видео контент' : 'Video Content' }}</span>
                            </v-flex>
                            <v-flex xs7 md7>
                                <span class="title py-4">Анхааруулга мэдээ</span>
                                <v-img
                                    class="mt-3"
                                    height="200px"
                                    src=""
                                >
                                </v-img>
                            </v-flex>
                        </v-layout>
                        <v-flex xs12 md12 class="my-3">
                            <span class="font-weight-black headline black--text">Цөмийн энергийн комисс</span><br />
                            <div class="subtitle-1 mt-3" min-height="125px" max-height="125px">Эгц, шулуун, хөндлөн биш, дагуу - Тууш замын нэгэн бяцхан буурчийн газар байжээ. Л.Түдэв. Уулын үер., тууш мод (шулуун мод), тууш шугамтай (шулуун шугамтай), тууш харилцаа (шууд харилцаа), тууш булчин (уртааш булчин), тууш судал (уртааш судал), зам тууш (замын дагуу)</div><br />
                            <v-btn class="ma-2" outline color="indigo">Дэлгэрэнгүй</v-btn>
                            <v-btn class="ma-2" outline color="indigo">Захирлын мэндчилгээ</v-btn>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
        </v-layout>
        <v-layout column class="list">
            <span class="font-weight-black headline black--text pb-3">{{ lang === 'mn' ? 'Нийтлэлүүд' : 'Publications' }}</span>
            <carousel :autoplay="false" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:2},1000:{items:5}}" class="" v-if="renderComponent">
                <v-flex xs12 v-for="(item, i) in news" :key="i" class="news-item">{{ lang === 'mn' ? 'mn' : item.title_eng.length !== 0 ? 'with image' : 'no' }}
                    <v-card
                        class="my-2 hover"
                        @click="goTodetail(item.category_id, item.sub_category, item.id)"
                    >
                        <v-img
                        class="white--text"
                        height="200px"
                        v-bind:src="lang === 'mn' ?
                                  item.image_name === null ? '../images/placeholder.jpg': convertImageUrl(item.image_name)
                                  :
                                  item.title_eng.length !== 0 ? item.image_name === null ? '../images/placeholder.jpg': convertImageUrl(item.image_name) : ''"
                        >
                        </v-img>
                        <v-card-text>
                        <span class="grey--text">{{ lang === 'mn' ? item.created_at.slice(0, 10) : item.title_eng.length !== 0 ? item.created_at.slice(0, 10) : '' }}</span><br>
                        <span class="pt-2 main-color">{{ lang === 'mn' ? item.title.slice(0, 35) : item.title_eng.slice(0, 35) }}</span>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </carousel>
        </v-layout>
        <v-layout wrap row class="my-4">
          <v-flex xs12 class="pb-3 text_center">
            <p
              class="font-weight-black headline black--text"
            >{{ lang === 'mn' ? 'Үйлчилгээнүүд' : 'Services' }}</p>
          </v-flex>
          <v-layout wrap row class="mx-5">
            <v-flex v-for="i in 3" :key="i" lg4 sm4 xs12 class="lastest_news hover">
              <div class="mb-2 pa-3 btn-stl text_center">
                <v-img width="150px" height="80px" src="/images/logo.png" class="mx_auto" contain></v-img>
                <span
                  class="subtitle-1 font-weight-bold"
                >{{ lang === 'mn' ? 'Тусгай зөвшөөрөл' : 'Special licence' }}</span>
              </div>
            </v-flex>
          </v-layout>
        </v-layout>
        <v-layout wrap row class="my-2">
            <v-flex xs12 sm6 lg6 class="video_news my-2">
                <span class="font-weight-black headline black--text">{{ lang === 'mn' ? 'Видео' : 'Video' }}</span>
                <v-card
                    v-for="(item, i) in videoNews"
                    :key="i"
                    >
                    <v-img
                        class="mt-3"
                        height="300px"
                        v-bind:src="lang === 'mn' ?
                          item.image === null ? '../images/placeholder.jpg': convertImageUrl(item.image)
                          :
                          item.title_eng.length !== 0 ? item.image === null ? '../images/placeholder.jpg': convertImageUrl(item.image) : ''"
                        >
                    </v-img>

                    <v-card-text>
                        <span>{{ lang === 'mn' ? item.created_at.slice(0, 10) : item.title_eng.length !== 0 ? item.created_at.slice(0, 10) : '' }}</span><br>
                        <span class="text--primary">
                            <span>{{ lang === 'mn' ? item.title.slice(0, 100) : item.title_eng.slice(0, 100) }}</span>
                        </span>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            outline
                            color="orange"
                            class="ml-auto"
                            @click="goTodetail(item.category_id, item.sub_category, item.id)"
                        >
                            {{ lang === 'mn' ? 'Илүү ихийг' : 'Read More' }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm6 lg6 class="photo_news my-2">
                <span class="font-weight-black headline black--text">{{ lang === 'mn' ? 'Зураг' : 'Image' }}</span>
                <v-card
                    v-for="(item, i) in photoNews" 
                    :key="i"
                    >
                    <v-img
                        class="mt-3"
                        height="300px"
                        v-bind:src="item.image_name === null ? '../images/placeholder.jpg': convertImageUrl(item.image_name)"
                      >
                    </v-img>

                    <v-card-text>
                        <span>{{ lang === 'mn' ? item.created_at.slice(0, 10) : item.title_eng.length !== 0 ? item.created_at.slice(0, 10) : '' }}</span><br>
                        <span class="text--primary">
                            <span>{{ lang === 'mn' ? item.title.slice(0, 100) : item.title_eng.slice(0, 100) }}</span>
                        </span>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            outline
                            color="orange"
                            class="ml-auto"
                            @click="goTodetail(item.category_id, item.sub_category, item.id)"
                        >
                            {{ lang === 'mn' ? 'Илүү ихийг' : 'Read More' }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <!-- <v-layout wrap row class="my-4"> -->
        <carousel :autoplay="false" :nav="false" :dots="false" :responsive="{0:{items:2},600:{items:2},1000:{items:4}}" class="partner" v-if="renderComponent">
            <v-flex v-for="(item, i) in partner" :key="i" :to ="{name:item.link }" xs12 class="partner_list my-2">
                <a :href="item.link" target="_blank" style="text-decoration: none;">
                    <v-layout wrap column class="pa-3 btn-stl hover text-center">
                        <v-img
                            width="30px"
                            height="30px"
                            src="/images/logo_small.jpg"
                            class="mx-auto"
                            contain
                        ></v-img>
                        <span class="subtitle-1">
                            {{ item.name }}
                        </span>
                </v-layout>
                </a>
            </v-flex>
        </carousel>
    </v-container>
</template>
<script>
import Corausel from "~/components/Corausel.vue";
import Vue from "vue";
import VueResource from "vue-resource";
import { environment } from "../config/environment";

Vue.use(VueResource);

export default {
  components: {
    Corausel
  },
  data() {
    return {
      lang: "",
      latestNews: [],
      photoNews: [],
      videoNews: [],
      news: [],
      partner: [],
      renderComponent: false
    };
  },
  mounted: function() {
    this.loadData();
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    convertImageUrl: function(url) {
      return `${environment.API_HOST}/news/${url}`;
    },
    loadData: function() {
      Vue.http
        .get(`${environment.API_HOST}:5000/r/home`)
        .then(this.successCallback, this.errorCallback);
    },
    successCallback: function(result) {
      //this.Corausel = result.body.data.carousel;
      this.latestNews = result.body.data.latestNews;
      this.photoNews = result.body.data.photoNews;
      this.videoNews = result.body.data.videoNews;
      this.news = result.body.data.news;
      this.partner = result.body.data.partner;
      this.renderComponent = true;
    },
    errorCallback: function(result) {
      console.log("error", result);
    }
  }
};
</script>
