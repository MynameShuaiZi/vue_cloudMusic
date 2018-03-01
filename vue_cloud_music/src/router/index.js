import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import main from '@/components/main'
import hotSong from '@/components/hotSong'
import recommend from '@/components/recommend'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'Hello',
      component: main,
      children: [
        {
          path: '/',
          component: recommend
        },
        {
          path: '/recommend',
          component: recommend
        },
        {
          path: '/hotSong',
          component: hotSong
        },
        {
          path: '/search',
          component: search
        }
      ]
    }
  ]
})
