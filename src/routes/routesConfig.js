import PeoplePage from "../components/PeoplePage/PeoplePage";
import HomePage from "../components/HomePage/HomePage";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";
import PersonPage from "../components/PersonPage/PersonPage";
import FavoritePage from "../components/FavoritePage/FavoritePage";
import SearchPage from "../components/SearchPage/SearchPage";
import VehiclesPage from "../components/VehiclesPage/VehiclesPage";
import PersonVehiclesPage from "../components/PersonVehiclesPage/PersonVehiclesPage";
import StarshipsPage from "../components/StarshipsPage/StarshipsPage";
import PersonStarshipsPage from "../components/PersonStarshipsPage/PersonStarshipsPage";
import PlanetsPage from "../components/PlanetsPage/PlanetsPage";
import PersonPlanetsPage from "../components/PersonPlanetsPage/PersonPlanetsPage";
import FilmsPage from "../components/FilmsPage/FilmsPage";
import PersonFilmPage from "../components/PersonFilmPage/PersonFilmPage";

const routesConfig = [
  {
    path: '/',
    element: <HomePage />
  },

  {
    path: '/people',
    element: <PeoplePage />
  },
  
  {
    path: '*',
    element: <NotFoundPage />
  },
  {
    path: '/people/:id',
    element: <PersonPage />
},
{
  path: '/vehicles/:id',
  element: <PersonVehiclesPage />
},
{
  path: '/starships/:id',
  element: <PersonStarshipsPage />
},
{
  path: '/planets/:id',
  element: <PersonPlanetsPage />
},
{
  path: '/films/:id',
  element: <PersonFilmPage />
},
{
  path: '/vehicles',
  element: <VehiclesPage/>
},
{
  path: '/starships',
  element: <StarshipsPage/>
},
{
  path: '/planets',
  element: <PlanetsPage/>
},
{
  path: '/films',
  element: <FilmsPage/>
},
{
  path: '/favorite',
  element: <FavoritePage />
},
{
  path: '/search',
  element: <SearchPage />
},
]

export default routesConfig;