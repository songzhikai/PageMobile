export default [
  { path: '/', component: () => import('../views/pages/home_page')}, // 列表页面
  { path: '/pages/index', component: () => import('../views/pages/home_page') }, // 列表页面
];
