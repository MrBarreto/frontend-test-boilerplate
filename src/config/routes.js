import { Home, Initial, Filters } from "../pages";

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
  },
  {
    exact: true,
    path: "/filters",
    component: Filters,
    key: "filters"
  }
  
];

export default routes;
