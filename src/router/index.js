import { createWebHistory, createRouter } from "vue-router";
import BookView from "@/views/BookView.vue";
import SignIn from "@/views/signin.vue";
import TodoList from "@/views/TodoList.vue";
const routes = [
    {
        path: "/",
        name: "SignIn",
        component: SignIn,
    },
    {
        path: "/manager",
        name: "BookView",
        component: BookView,
    },
    {
        path: "/todo",
        name: "TodoList",
        component: TodoList,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
    {
        path: "/Books/:id",
        name: "book.edit",
        component: () => import("@/views/BookEdit.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/Books/add",
        name: "book.add",
        component: () => import("@/views/BookAdd.vue"),
        props: true // Truyền các biến trong $route.params vào làm props
    },
    {
        path: "/users/add",
        name: "user.add",
        component: () => import("@/views/signup.vue"),
        props: true
    },
    // {
    //     path: "/",
    //     name: "user.signIn",
    //     component: () => import("@/views/signin.vue"),
    // },   
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
    