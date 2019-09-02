import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/pages/index'
import List from '~/pages/listcontent'
import NewsDetail from '~/pages/newsDetail'
import HTML from '~/pages/htmlcontent'
import FileList from '~/pages/filelistcontent'

Vue.use(Router)

export function createRouter() {
    return new Router({
      mode: 'history',
      routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list/:id/:subCat',
            name: 'ListContent',
            component: List
        },
        {
            path: '/newsDetail/:id/:subCatId/:postId',
            name: 'NewsDetail',
            component: NewsDetail
        },
        {
            path: '/htmlcon/:id/:subCat',
            name: 'HTML',
            component: HTML
        },
        {
            path: '/filelist/:id/:subCat',
            name: 'FileList',
            component: FileList
        },
    ],
    
    scrollBehavior () {
        return { x: 0, y: 0 }
    }
    })
}