 <template>
  <div style="background-color: #0055b7!important;">
    <v-container class="pa-0" style="background-color: #0055b7!important;">
      <v-toolbar style="background-color: #0055b7!important;" height="40" flat>
        <!-- Menu -->
        <v-toolbar-items open-on-hover top offset-y class="hidden-sm-and-down">
          <v-menu open-on-hover bottom offset-y v-for="(item, i) in menu" :key="i">
            <template v-slot:activator="{ on }">
              <v-btn class="robotoCondensed font-weight-bold subtitle-2 white--text" flat v-on="on">
                {{ lang === 'en' ? item.titleEn : item.title }}
              </v-btn>
            </template>
            <v-list style="padding: 0!important">
              <v-list-tile v-for="(sub, index) in item.asas" :key="index" class="submenu_height">
                <router-link
                  class="submenu"
                  :to="{name:sub.linkName, params:{ id: sub.mainCatId, subCat: sub.submenuId}}"
                >
                  <v-list-tile-title class="submenu_size submenu_height">
                    {{ lang === 'en' ? sub.subTitleEn : sub.subtitle }}
                  </v-list-tile-title>
                </router-link>
              </v-list-tile>
            </v-list>
          </v-menu>
          <a href="https://www.shilendans.gov.mn/org/546" style="height: 100%" target="_blank">
            <v-btn
              class="robotoCondensed font-weight-bold subtitle-2 white--text"
              flat
            >{{ lang === 'en' ? 'Financial transparency' : 'Шилэн данс' }}</v-btn>
          </a>
        </v-toolbar-items>
        <v-menu class="hidden-md-and-up">
          <v-toolbar-side-icon slot="activator" class="white--text"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-for="item in menu" :key="item.icon">
                <router-link
                  class="submenu"
                  :to="{name:item.linkName, params:{ id: item.mainCatId, subCat: item.submenuId}}"
                >
                  <v-list-tile-title>{{ lang === 'en' ? item.titleEn : item.title }}</v-list-tile-title>
                </router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-container>
  </div>
</template>
<script>
import {environment} from "../config/environment";
export default {
  data() {
    return {
      lang: "",
      menu: [
        {
          title: "Зорилт",
          titleEn: "Mission",
          mainCatId: 7,
          submenuId: "13",
          linkName: "HTML",
          asas: [
            {
              subtitle: "Цөмийн технологийг нэвтрүүлэх, судалгааг хөгжүүлэх",
              subTitleEn:"Introducing nuclear technology and developing the research",
              mainCatId: 7,
              submenuId: "13",
              linkName: "HTML",
            },
            {
              subtitle:"Цацраг идэвхт ашигт малтмалыг эдийн засгийн эргэлтэнд оруулах",
              subTitleEn:"Utilization of nuclear energy in economy",
              mainCatId: 7,
              submenuId: "12",
              linkName: "HTML",
            },
            {
              subtitle: "Цөмийн болон цацрагийн аюулгүй байдал",
              subTitleEn:"Nuclear and Radiation Security",
              mainCatId: 7,
              submenuId: "14",
              linkName: "HTML",
            },
            {
              subtitle: "Олон улсад өрсөлдөх чадвартай салбарыг хөгжүүлэх",
              subTitleEn:"Developing internationally competitive sector",
              mainCatId: 7,
              submenuId: "15",
              linkName: "HTML",
            }
          ]
        },
        {
          title: "Бидний тухай",
          titleEn: "About Us",
          mainCatId: 13,
          submenuId: "50",
          linkName: "AboutUs",
          asas: [
            {
              subtitle: "Даргын мэндчилгээ",
              subTitleEn:"Greeting of head",
              mainCatId: 13,
              submenuId: "50",
              linkName: "AboutUs",
            },
            {
              subtitle: "Эрхэм зорилго",
              subTitleEn:"Vision",
              mainCatId: 13,
              submenuId: "52",
              linkName: "AboutUs",
            },
            {
              subtitle: "Байгууллагын бүтэц",
              subTitleEn:"Structure of organization",
              mainCatId: 13,
              submenuId: "39",
              linkName: "AboutUs",
            },
            {
              subtitle: "Байгууллагын түүх",
              subTitleEn:"History of the organization",
              mainCatId: 13,
              submenuId: "51",
              linkName: "AboutUs",
            },
            {
              subtitle: "Хамтын ажиллагаа",
              subTitleEn:"Partners",
              mainCatId: 13,
              submenuId: "53",
              linkName: "AboutUs",
            },
            {
              subtitle: "Төсөл хөтөлбөр",
              subTitleEn:"Projects",
              mainCatId: 13,
              submenuId: "55",
              linkName: "AboutUs",
            }
          ]
        },
        {
          title: "Үйлчилгээ",
          titleEn: "Services",
          mainCatId: 9,
          submenuId: "24",
          linkName: "ListContent",
          asas: [
            {
              subtitle: "Сургалт",
              subTitleEn:"Training",
              mainCatId: 9,
              submenuId: "24",
              linkName: "ListContent",
            },
            {
              subtitle: "Танин мэдэхүйн булан",
              subTitleEn:"Knowledge",
              mainCatId: 9,
              submenuId: "46",
              linkName: "ListContent",
            },
            {
              subtitle: "Асуулт хариулт",
              subTitleEn:"Questions & Answers",
              mainCatId: 9,
              submenuId: "29",
              linkName: "ListContent",
            }
          ]
        },
        {
          title: "Хууль, эрх зүй",
          titleEn: "Laws",
          mainCatId: 10,
          submenuId: "25",
          linkName: "FileList",
          asas: [
            {
              subtitle: "Салбарын хууль",
              subTitleEn:"Laws",
              mainCatId: 10,
              submenuId: "25",
              linkName: "FileList"
            },
            {
              subtitle: "Тогтоол, шийдвэр",
              subTitleEn:"Resolutions",
              mainCatId: 10,
              submenuId: "27",
              linkName: "FileList"

            },
            {
              subtitle: "Олон улсын гэрээ конвенци",
              subTitleEn:"International agreements & conventions",
              mainCatId: 10,
              submenuId: "40",
              linkName: "FileList"
            },
            {
              subtitle: "Дүрэм журам",
              subTitleEn:"Rules & Regulations",
              mainCatId: 10,
              submenuId: "36",
              linkName: "FileList"
            },
            {
              subtitle: "Үндэсний стандартууд",
              subTitleEn:"National Standarts",
              mainCatId: 10,
              submenuId: "44",
              linkName: "FileList"
            },
            {
              subtitle: "Зөвлөмж",
              subTitleEn:"Reference	",
              mainCatId: 10,
              submenuId: "49",
              linkName: "FileList"
            }
          ]
        },
        {
          title: "Мэдээ мэдээлэл",
          titleEn: "News",
          mainCatId: 6,
          submenuId: "37",
          linkName: "ListContent",
          asas: [
            {
              subtitle: "Мэдээ",
              subTitleEn:"News Feed",
              mainCatId: 6,
              submenuId: "37",
              linkName: "ListContent"
            },
            {
              subtitle: "Гадаад мэдээ",
              subTitleEn:"Foreign news",
              mainCatId: 6,
              submenuId: "1",
              linkName: "ListContent",
              title: "Мэдээ мэдээлэл",
              titleEn: "News"
            },
            {
              subtitle: "Фото мэдээ",
              subTitleEn:"Photo news",
              mainCatId: 6,
              submenuId: "10",
              linkName: "ListContent"
            },
            {
              subtitle: "Видео мэдээ",
              subTitleEn:"Video news",
              mainCatId: 6,
              submenuId: "11",
              linkName: "ListContent"
            },
            {
              subtitle: "Хэвлэлийн тойм",
              subTitleEn:"Press review",
              mainCatId: 6,
              submenuId: "6",
              linkName: "ListContent"
            },
            {
              subtitle: "Ярилцлага",
              subTitleEn:"Conversation",
              mainCatId: 6,
              submenuId: "34",
              linkName: "ListContent"
            },
            {
              subtitle: "Нийтлэл",
              subTitleEn:"Publication",
              mainCatId: 6,
              submenuId: "35",
              linkName: "ListContent"
            },
            {
              subtitle: "Зарлал",
              subTitleEn:"Announcement",
              mainCatId: 6,
              submenuId: "35",
              linkName: "ListContent"
            }
          ]
        },
        {
          title: "Ил тод байдал",
          titleEn: "Transparency",
          mainCatId: 8,
          submenuId: "19",
          linkName: "ListContent",
          asas: [
            {
              subtitle: "Хүний нөөцийн ил тод байдал",
              subTitleEn:"Human resource transparency",
              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Үйл ажиллагааны ил тод байдал",
              subTitleEn:"Operational transparency",
              mainCatId: 8,
              submenuId: "19",
              linkName: "ListContent"
            },
            {
              subtitle: "Авлигын эсрэг",
              subTitleEn:"Anti-corruption",
              mainCatId: 8,
              submenuId: "22",
              linkName: "ListContent"
            },
            {
              subtitle: "Өргөдөл гомдол",
              subTitleEn:"Complaint - 11 11",
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
      this.$router.push({ name: linkName, params: { id: menuId } });
    },
    menuItems() {
      return this.menu;
    }
  },
}

</script>