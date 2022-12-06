
import Main from "./pages/Main.vue";
import Input from "./pages/Input.vue";
import Updated from "./pages/Update.vue"

export default [
  {
    path: "/",
    name: "home",
    component: Main,
  },
  {
    path: "/input",
    component: Input,
  },
  {
    path: "/update/:id",
    component: Updated,
  }
];
