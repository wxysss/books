import {
  createRouter,
  createWebHistory
} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Categroy.vue')
const Detil = () => import('../views/detail/Detail.vue')
const Profile = () => import('../views/profile/Profile.vue')
const ShopCar = () => import('../views/shopcar/ShopCar.vue')
const Register = ()=>import ('../views/profile/Register.vue')
const routes = [{
    path: '',
    name: 'home',
    component: Home, // 默认缺省路由
    meta: {
      title: '图书'
    }
  },
  {
    path: '/',
    name: 'DefaultHome',
    component: Home, // 首页
    meta: {
      title: '图书'
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: Category, // 分类
    meta: {
      title: '图书-商品分类'
    }
  },
  {
    path: '/detail',
    name: 'Detil',
    component: Detil, // 详情页
    meta: {
      title: '图书-详情页'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile, // 个人中心
    meta: {
      title: '图书-个人中心'
    }
  },
  {
    path: '/shopcar',
    name: 'ShopCar',
    component: ShopCar, // 购物车
    meta: {
      title: '图书-购物车'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register, // 注册
    meta: {
      title: '图书-用户注册'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // hash: createWebHashHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 如果没有登录，跳转去login
  next();
  // 控制路由跳转时路径变化和标签页名字
  document.title = to.meta.title
})
export default router