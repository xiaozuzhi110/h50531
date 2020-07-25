import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name:'index',
    component: () => import('@/views/index.vue'),
    redirect:'/home'
  },
  {
    path:'/home',
    name:"home",
    component: () => import('@/views/Home.vue')
  },
  {
    path:'/CommodityDetails/:id',
    name:"CommodityDetails",
    component: () => import('@/views/CommodityDetails.vue')
  },
  {
    path:'/login',
    name:"login",
    component: () => import('@/views/login.vue')
  },
  {
    path:'/register',
    name:"register",
    component: () => import('@/views/register.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
