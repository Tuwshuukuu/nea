<template>
  <div class="color">
    <v-container>
      <v-layout wrap row>
        <v-flex xs12 lg3>
          <div v-for="(item, i) in menu1" :key="'q' + i" class="background_none white--text">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'a' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              
              <br />
            </div>
          </div>
          <div v-for="(item, i) in menu" :key="'w' + i" class="background_none white--text pr-4">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'b' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              <br />
            </div>
          </div>
        </v-flex>
        <v-flex xs12 lg3>
          <div v-for="(item, i) in menu2" :key="'r' + i" class="background_none white--text">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'c' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              <br />
            </div>
          </div>
          <div v-for="(item, i) in menu3" :key="'t' + i" class="background_none white--text">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'d' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              <br />
            </div>
          </div>
        </v-flex>
        <v-flex xs12 lg3>
          <div v-for="(item, i) in menu4" :key="'y' + i" class="background_none white--text">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'e' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              <br />
            </div>
          </div>
          <div v-for="(item, i) in menu5" :key="'u' + i" class="background_none white--text">
            <div class="title mx-3 mt-5">{{ lang === 'mn' ? item.title: item.titleEn }}</div>
            <br />
            <div class="pb-1" v-for="(index, i) in item.asas" :key="'f' + i">
              <router-link
                class="footermenu"
                :to="{name:index.linkName, params:{id: index.mainCatId, subCat: index.submenuId,}}"
              >{{ lang === 'mn' ? index.subtitle: index.subTitleEn }}</router-link>
              <br />
            </div>
          </div>
        </v-flex>
        <v-flex xs12 lg3></v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
// import Vue from 'vue';
// import Vuetify from 'vuetify';

// Vue.use(Vuetify);
export default {
  data() {
    return {
      lang: "",
      menu: [
        {
          title: "Зорилт",
          titleEn: "Mission",
          asas: [
            {
              subtitle: "Цөмийн технологийг нэвтрүүлэх, судалгааг хөгжүүлэх",
              subTitleEn:"Introducing nuclear technology and developing the research",
              mainCatId: 7,
              submenuId: "13",
              linkName: "HTML"
            },
            {
              subtitle:"Цацраг идэвхт ашигт малтмалыг эдийн засгийн эргэлтэнд оруулах",
              subTitleEn: "Utilization of nuclear energy in economy",
              mainCatId: 7,
              submenuId: "12",
              linkName: "HTML"
            },
            {
              subtitle: "Цөмийн болон цацрагийн аюулгүй байдал",
              subTitleEn: "Nuclear and Radiation Security",
              mainCatId: 7,
              submenuId: "14",
              linkName: "HTML"
            },
            {
              subtitle: "Олон улсад өрсөлдөх чадвартай салбарыг хөгжүүлэх",
              subTitleEn: "Developing internationally competitive sector",
              mainCatId: 7,
              submenuId: "15",
              linkName: "HTML"
            }
          ]
        }
      ],
      menu1: [
        {
          title: "Бидний тухай",
          titleEn: "About Us",
          asas: [
            {
              subtitle: "Даргын мэндчилгээ",
              subTitleEn: "Greeting of head",
              mainCatId: 13,
              submenuId: "31",
              linkName: "HTML"
            },
            {
              subtitle: "Эрхэм зорилго",
              subTitleEn: "Vision",
              mainCatId: 13,
              submenuId: "31",
              linkName: "HTML"
            },
            {
              subtitle: "Байгууллагын бүтэц",
              subTitleEn: "Structure of organization",
              mainCatId: 13,
              submenuId: "32",
              linkName: "HTML"
            },
            {
              subtitle: "Байгууллагын түүх",
              subTitleEn: "History of the organization",

              mainCatId: 13,
              submenuId: "32",
              linkName: "HTML"
            },
            {
              subtitle: "Хамтын ажиллагаа",
              subTitleEn: "Partners",

              mainCatId: 13,
              submenuId: "31",
              linkName: "HTML"
            },
            {
              subtitle: "Төсөл хөтөлбөр",
              subTitleEn: "Projects",

              mainCatId: 13,
              submenuId: "14",
              linkName: "HTML"
            }
          ]
        }
      ],
      menu2: [
        {
          title: "Үйлчилгээ",
          titleEn: "Services",

          asas: [
            {
              subtitle: "Сургалт",
              subTitleEn: "Training",

              mainCatId: 9,
              submenuId: "24",
              linkName: "ListContent"
            },
            {
              subtitle: "Танин мэдэхүйн булан",
              subTitleEn: "Knowledge",

              mainCatId: 9,
              submenuId: "46",
              linkName: "ListContent"
            },
            {
              subtitle: "Асуулт хариулт",
              subTitleEn: "Questions & Answers",

              mainCatId: 9,
              submenuId: "29",
              linkName: "HTML"
            }
          ]
        }
      ],
      menu3: [
        {
          title: "Хууль, эрх зүй",
          titleEn: "Laws",

          asas: [
            {
              subtitle: "Салбарын хууль",
              subTitleEn: "Laws",

              mainCatId: 10,
              submenuId: "25",
              linkName: "FileList"
            },
            {
              subtitle: "Тогтоол, шийдвэр",
              subTitleEn: "Resolutions",

              mainCatId: 10,
              submenuId: "27",
              linkName: "FileList"
            },
            {
              subtitle: "Олон улсын гэрээ конвенци",
              subTitleEn: "International agreements & conventions",

              mainCatId: 10,
              submenuId: "40",
              linkName: "FileList"
            },
            {
              subtitle: "Дүрэм журам",
              subTitleEn: "Rules & Regulations",

              mainCatId: 10,
              submenuId: "36",
              linkName: "FileList"
            },
            {
              subtitle: "Үндэсний стандартууд",
              subTitleEn: "National Standarts",

              mainCatId: 10,
              submenuId: "44",
              linkName: "FileList"
            },
            {
              subtitle: "Зөвлөмж",
              mainCatId: 10,
              submenuId: "49",
              linkName: "FileList"
            }
          ]
        }
      ],
      menu4: [
        {
          title: "Мэдээ мэдээлэл",
          titleEn: "News",

          asas: [
            {
              subtitle: "Мэдээ",
              subTitleEn: "News Feed",

              mainCatId: 6,
              submenuId: "37",
              linkName: "ListContent"
            },
            {
              subtitle: "Гадаад мэдээ",
              subTitleEn: "Foreign news",

              mainCatId: 6,
              submenuId: "1",
              linkName: "ListContent"
            },
            {
              subtitle: "Фото мэдээ",
              subTitleEn: "Photo news",

              mainCatId: 6,
              submenuId: "10",
              linkName: "ListContent"
            },
            {
              subtitle: "Видео мэдээ",
              subTitleEn: "Video news",

              mainCatId: 6,
              submenuId: "11",
              linkName: "ListContent"
            },
            {
              subtitle: "Хэвлэлийн тойм",
              subTitleEn: "Press review",

              mainCatId: 6,
              submenuId: "6",
              linkName: "ListContent"
            },
            {
              subtitle: "Ярилцлага",
              subTitleEn: "Conversation",

              mainCatId: 6,
              submenuId: "34",
              linkName: "ListContent"
            },
            {
              subtitle: "Нийтлэл",
              subTitleEn: "Publication",

              mainCatId: 6,
              submenuId: "35",
              linkName: "ListContent"
            },
            {
              subtitle: "Зарлал",
              subTitleEn: "Announcement",

              mainCatId: 6,
              submenuId: "",
              linkName: "ListContent"
            }
          ]
        }
      ],
      menu5: [
        {
          title: "Ил тод байдал",
          titleEn: "Transparency",

          asas: [
            {
              subtitle: "Хүний нөөцийн ил тод байдал",
              subTitleEn: "Human resource transparency",

              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Үйл ажиллагааны ил тод байдал",
              subTitleEn: "Operational transparency",

              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Авлигын эсрэг",
              subTitleEn: "Anti-corruption",

              mainCatId: 8,
              submenuId: "22",
              linkName: "ListContent"
            },
            {
              subtitle: "Өргөдөл гомдол",
              subTitleEn: "Complaint - 11 11",
              mainCatId: 8,
              submenuId: "9",
              linkName: "ListContent"
            }
          ]
        }
      ]
    };
  },
  mounted: function() {
    this.lang = localStorage.getItem("lang");
  },
  methods: {
    goTodetail(linkName, menuId) {
      //   console.log(name + "+" + menuId);
      this.$router.push({ name: linkName, params: { id: menuId } });
    },
    menuItems() {
      return this.menu;
    }
  }
};
</script>