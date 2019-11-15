import { Home, Initial, Filters, Detail } from "../pages";

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
  },
  {
    exact: true,
    path: "/detail",
    component: Detail,
    key: "detail"
  }
  
];

export default routes;
