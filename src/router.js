import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const router = new Router({
  mode: process.env.NODE_ENV === 'production' ? 'history' : 'hash',
  base: process.env.NODE_ENV === 'production' ? '/PAI/' : '/BNP/',
  linkActiveClass: "activeClass",
  scrollBehavior ()  {
    return { y: 0 }
  },
  routes: [
    {
      path: '*',
      redirect: { name: 'login' },
    },
    {
      path: '/',
      redirect: { name: 'login' },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login.vue'),
      meta: {
        layout: 'simpleLayout'
      }
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: () => import(/* webpackChunkName: "checkbox" */ './components/checkbox.vue'),
      meta: {
        layout: 'mainLayout'
      }
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: () => import(/* webpackChunkName: "Overview" */ './views/investSuggest/__index.vue'),
      // meta: {
      //   layout: 'mainLayout'
      // },
      children: [
        {
          path: '/Overview',
          name: 'investSuggest',
          component: () => import(/* webpackChunkName: "Overview" */ './views/investSuggest/investSuggest.vue'),
          meta: {
            layout: 'mainLayout'
          },
        },
        {
          path: '/Overview/OTP',
          name: 'OTP',
          component: () => import(/* webpackChunkName: "Overview" */ './views/investSuggest/OTP.vue'),
          meta: {
            layout: 'mainLayout'
          }
        },
        {
          path: '/Overview/Submitted',
          name: 'Submitted',
          component: () => import(/* webpackChunkName: "Overview" */ './views/investSuggest/completePage.vue'),
          meta: {
            layout: 'mainLayout'
          }
        }
      ]
    },
    {
      path: '/adviceHistory',
      name: ' adviceHistory',
      component: () => import(/* webpackChunkName: "adviceHistory" */ './views/historySuggest.vue'),
      meta: {
        layout: 'mainLayout'
      },
    },
    {
      path: '/AdviceDesc',
      name: 'AdviceDesc',
      redirect: { name: 'InvMarket' },
      component: () => import(/* webpackChunkName: "AdviceDesc" */ './views/AdviceDesc/_index.vue'),
      children: [
        {
          path: '/AdviceDesc/InvMarket',
          name: 'InvMarket',
          component: () => import(/* webpackChunkName: "AdviceDesc" */ './views/AdviceDesc/InvMarket.vue'),
          meta: {
            layout: 'mainLayout'
          }
        },
        {
          path: '/AdviceDesc/Rebalance',
          name: 'Rebalance',
          component: () => import(/* webpackChunkName: "AdviceDesc" */ './views/AdviceDesc/Rebalance.vue'),
          meta: {
            layout: 'mainLayout'
          }
        },
        {
          path: '/AdviceDesc/PortConstr',
          name: 'PortConstr',
          component: () => import(/* webpackChunkName: "AdviceDesc" */ './views/AdviceDesc/PortConstr.vue'),
          meta: {
            layout: 'mainLayout'
          }
        },
      ]
    },
  ]
})

// router.beforeEach((to, from, next) => {
//   //全局檢查token
//   if(to.path !== '/login'){
//     let checkToken = sessionStorage.getItem('user');
//     if(checkToken) next();
//     else next({ path: '/login' });
//   }
//   next()
// });

export default router

