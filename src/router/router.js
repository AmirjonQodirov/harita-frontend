import {createWebHistory, createRouter} from "vue-router";
import Country from "../components/Country/CountryComponent";
import MainComponent from "@/components/MainComponent";

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainComponent,
    },
    {
        path: '/country/:id',
        name: 'country',
        props: true,
        component: Country,
    },
    {
        path: '/:pathMatch(.*)*',
        component: MainComponent
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;