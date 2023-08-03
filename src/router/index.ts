// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user';

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  }, {
    path: '/user',
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/User/Login.vue'),
      }, {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/User/Register.vue'),
      }
    ]
  }, {
    path: '/ebook',
    // component: () => import('@/views/Ebook/bookshelf.vue'),
    children: [
      {
        path: 'bookshelf',
        name: 'Bookshelf',
        component: () => import('@/views/Ebook/bookshelf.vue'),
      }, {
        path: 'upload',
        name: 'Upload',
        component: () => import('@/views/Ebook/Upload.vue')
      }, {
        path: 'read/:bookid',
        name: 'Read',
        component: () => import('@/views/Ebook/Read.vue')
      }
    ]
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/static/'),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/user/login' && to.path !== '/user/register' && useUserStore().token === '') {
    next('/user/login');
  } else {
    next();
  }
})

export default router
