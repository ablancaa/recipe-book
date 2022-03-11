import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home";
import NotFound from "@/views/NotFound";
import RecipeForm from "@/components/RecipeForm.vue";
const routes = [
	{
		path: "/",
		name: "Home-1",
		component: Home,
	},
	{
		path: "/RecipeForm",
		name: "RecipeForm",
		component: RecipeForm,
	},
		{
		path: "/:pathMatch(.*)*",
		name: "notfound",
		component: NotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
