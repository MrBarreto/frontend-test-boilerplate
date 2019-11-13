import { Home, Initial } from "../pages";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home,
    key: "home"
  },
  {
    exact: true,
    path: "/initial",
    component: Initial,
    key: "initial"
  }
];

export default routes;
