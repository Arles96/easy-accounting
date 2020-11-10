/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import Partidas from "views/partidas/Partidas.js";
import Exercise from "views/examples/Exercise.js";
import Catalogue from "views/examples/Catalogue.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin"
  },
  {
    path: "/partidas",
    name: "Partidas",
    icon: "ni ni-bullet-list-67 text-red",
    component: Partidas,
    layout: "/admin"
  },
  {
    path: "/exercises",
    name: "Ejercicios",
    icon: "ni ni-bullet-list-67 text-red",
    component: Exercise,
    layout: "/admin"
  },
  {
    path: "/catalogue",
    name: "Catálogo de Cuentas",
    icon: "ni ni-collection text-blue",
    component: Catalogue,
    layout: "/admin"
  }
];
export default routes;
