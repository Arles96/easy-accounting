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
import Resultados from "views/resultados/Resultados.js";
import Partidas from "views/partidas/Partidas.js";
import Exercise from "views/examples/Exercise.js";
import Catalogue from "views/examples/Catalogue.js";
import ListarPartidas from "views/partidas/Listar.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/catalogue",
    name: "Catálogo de Cuentas",
    icon: "ni ni-collection text-blue",
    component: Catalogue,
    layout: "/admin",
  },
  {
    path: "/partidas",
    name: "Partidas",
    icon: "ni ni-bullet-list-67 text-red",
    component: Partidas,
    layout: "/admin",
  },
  {
    path: "/exercises",
    name: "Ejercicios",
    icon: "ni ni-map-big text-yellow",
    component: Exercise,
    layout: "/admin",
  },
  {
    path: "/resultados",
    name: "Resultados",
    icon: "ni ni-laptop text-green",
    component: Resultados,
    layout: "/admin",
  },
  {
    path: "/listar-partida",
    name: "Listar",
    icon: "ni ni-laptop text-green",
    component: ListarPartidas,
    layout: "/admin",
  },
];
export default routes;
