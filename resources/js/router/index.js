import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
      name: 'login',
      path: '/login',
      meta: { requiresGuest: true },
      component: () => import('@/pages/authentication/Login.vue'),
    },
    {
      path: "/",
      component: () => import("@/pages/Index.vue"),
      meta: { requiresAuth: true },
      // redirect: '/dashboard',
    //   children: [
    //     {
    //       path: '/dashboard',
    //       name: 'dashboard',
    //       component: () => import('@/views/Dashboard.vue'),
    //     },
    //     {
    //       path: '/bantuan',
    //       name: 'bantuan',
    //       component: () => import('@/views/Bantuan.vue'),
    //     },
    //     {
    //       path: '/profile',
    //       name: 'profile',
    //       component: () => import('@/views/Profile.vue'),
    //     },
    //     {
    //       path: '/akun',
    //       name: 'akun',
    //       component: () => import('@/views/akun/Index.vue'),
    //     },
    //     {
    //       path: '/akun-create',
    //       name: 'akun-create',
    //       component: () => import('@/views/akun/Form.vue'),
    //     },
    //     {
    //       path: '/akun-edit/:uuid',
    //       name: 'akun-edit',
    //       component: () => import('@/views/akun/Form.vue'),
    //       props: true,
    //     },
    //     {
    //       path: '/jurnal',
    //       name: 'jurnal',
    //       component: () => import('@/views/jurnal/Index.vue'),
    //     },
    //     {
    //       path: '/jurnal-create',
    //       name: 'jurnal-create',
    //       component: () => import('@/views/jurnal/Form.vue'),
    //     },
    //     {
    //       path: '/jurnal-detail/:uuid',
    //       name: 'jurnal-detail',
    //       component: () => import('@/views/jurnal/Form.vue'),
    //       props: true,
    //     },
    //     {
    //       path: '/buku-besar',
    //       name: 'buku-besar',
    //       component: () => import('@/views/buku-besar/Index.vue'),
    //     },
    //     {
    //       path: '/laporan',
    //       name: 'laporan',
    //       component: () => import('@/views/laporan/Index.vue'),
    //     },
    //     {
    //       path: '/laporan/neraca',
    //       name: 'laporan-neraca',
    //       component: () => import('@/views/laporan/Neraca.vue'),
    //     },
    //     {
    //       path: '/laporan/laba-rugi',
    //       name: 'laporan-laba-rugi',
    //       component: () => import('@/views/laporan/LabaRugi.vue'),
    //     },
    //     {
    //       path: '/laporan/arus-kas',
    //       name: 'laporan-arus-kas',
    //       component: () => import('@/views/laporan/ArusKas.vue'),
    //     },
    //     {
    //       path: '/pengaturan',
    //       name: 'pengaturan',
    //       component: () => import('@/views/pengaturan/Index.vue'),
    //     },
    //     {
    //       path: '/pengaturan/pengguna',
    //       name: 'pengguna',
    //       component: () => import('@/views/pengaturan/pengguna/Index.vue'),
    //     },
    //     {
    //       path: '/pengaturan/pengguna-create',
    //       name: 'pengguna-create',
    //       component: () => import('@/views/pengaturan/pengguna/Form.vue'),
    //     },
    //     {
    //       path: '/pengaturan/pengguna-edit/:uuid',
    //       name: 'pengguna-edit',
    //       component: () => import('@/views/pengaturan/pengguna/Form.vue'),
    //       props: true,
    //     },
    //     {
    //       path: '/pengaturan/konfigurasi',
    //       name: 'konfigurasi',
    //       component: () => import('@/views/pengaturan/konfigurasi/Index.vue'),
    //     },
    //     {
    //       path: '/pengaturan/konfigurasi-create',
    //       name: 'konfigurasi-create',
    //       component: () => import('@/views/pengaturan/konfigurasi/Form.vue'),
    //     },
    //     {
    //       path: '/pengaturan/konfigurasi-edit/:uuid',
    //       name: 'konfigurasi-edit',
    //       component: () => import('@/views/pengaturan/konfigurasi/Form.vue'),
    //       props: true,
    //     }

    //   ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
      if (isLoggedIn == null) {
        next({
          path: '/login'
        })
      } else {
        next()
      }
    } else if (to.matched.some(record => record.meta.requiresGuest)) {
      if (isLoggedIn == null) {
        next()
      } else {
        next('/app')
      }
    } else {
      next()
    }
})

export default router;
