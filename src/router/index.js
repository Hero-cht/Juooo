import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Cinema from '@/views/Cinema'
import Ticket from '@/views/Ticket'
import Center from '@/views/Center'
// import Section from '@/views/Home/section'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    component: Home
  //  children: [
  //   {
  //     path: 'section',
  //     component: Section
  //   }
  // ]
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/ticket',
    component: Ticket
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
