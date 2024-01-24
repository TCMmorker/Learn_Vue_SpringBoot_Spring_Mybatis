import {createRouter,createWebHistory} from "vue-router"

import First from "@/view/First";
import Second from "@/view/Second";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:"/first",
            component:First
        },
        {
            path:"/second",
            component:Second
        },
    ]
})

export default router