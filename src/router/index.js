import Vue from "vue";
import VueRouter from "vue-router";
import firebase from "firebase/compat/app";

Vue.use(VueRouter);

const routes = [

    {
        path: "/login",
        name: "login",
        meta: {layout: "Empty"},
        component: () => import("../views/Login")
    },
    {
        path: "/register",
        name: "register",
        meta: {layout: "Empty"},
        component: () => import("../views/Register")
    },
    {
        path: "/aboutAccount",
        name: "aboutAccount",
        meta: {layout: "Main", auth: true},
        component: () => import("../views/AboutAccount")
    },
    {
        path: "/bill",
        name: "bill",
        meta: {layout: 'Main', auth: true},
        component: () => import("../views/Bill")
    },
    {
        path: "/",
        name:"home",
        meta:{layout: 'Front', auth: false},
        component: () => import("../views/News")
    },
    {
        path: "/forNewWorkers",
        name:"forNewWorkers",
        meta:{layout: 'Front', auth: false},
        component: () => import("../views/ForNewWorkers"),
    },
    {
        path: "/activities",
        name:"activities",
        meta:{layout: 'Front', auth: false},
        component: () => import("../views/Activities"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) => {
    const currentUser = firebase.auth().currentUser
    const requireAuth = to.matched.some(record => record.meta.auth)
    if(requireAuth && !currentUser){

        next('/login?message=login')
    }else{
        next()
    }

})

export default router;
