
//const SWAPI_PLANETS = 'planets';
//const SWAPI_STARSHIPS = 'starships';
//const SWAPI_VEHICLES = 'vehicles';




// common
export const HTTPS = 'https://';
export const HTTP = 'http://';

// swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PEOPLE = 'people';
export const SWAPI_PARAM_PAGE = '/?page=';
export const SWAPI_PARAM_SEARCH = '/?search=';
export const SWAPI_VEHICLES = 'vehicles';
export const SWAPI_STARSHIPS = 'starships';
export const SWAPI_PLANETS = 'planets';
export const SWAPI_FILMS = 'films'


export const API_PEOPLE = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE;
export const API_SEARCH = HTTPS+SWAPI_ROOT+SWAPI_PEOPLE+SWAPI_PARAM_SEARCH;
export const API_VEHICLES = HTTPS+SWAPI_ROOT+SWAPI_VEHICLES+SWAPI_PARAM_PAGE;
export const API_PERSON_VEHICLES = HTTPS+SWAPI_ROOT+SWAPI_VEHICLES;
export const API_STARSHIPS = HTTPS+SWAPI_ROOT+SWAPI_STARSHIPS+SWAPI_PARAM_PAGE;
export const API_PERSON_STARSHIPS = HTTPS+SWAPI_ROOT+SWAPI_STARSHIPS;
export const API_PLANETS = HTTPS+SWAPI_ROOT+SWAPI_PLANETS +SWAPI_PARAM_PAGE;
export const API_PERSON_PLANETS = HTTPS+SWAPI_ROOT+SWAPI_PLANETS;
export const API_FILMS = HTTPS+SWAPI_ROOT+SWAPI_FILMS;




// visualguide
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';
const GUIDE_PEOPLE = 'characters';
export const GUIDE_IMG_EXTENSION = '.jpg';
const GUIDE_VEHICLES = 'vehicles';
const GUIDE_STARSHIPS = 'starships';
const GUIDE_PLANETS = 'planets';
const GUIDE_FILMS = 'films';



export const URL_IMG_PERSON = GUIDE_ROOT_IMG+GUIDE_PEOPLE;
export const URL_IMG_VEHICLES = GUIDE_ROOT_IMG+GUIDE_VEHICLES;
export const URL_IMG_STARSHIPS = GUIDE_ROOT_IMG+GUIDE_STARSHIPS;
export const URL_IMG_PLANETS = GUIDE_ROOT_IMG+GUIDE_PLANETS ;
export const URL_IMG_FILMS = GUIDE_ROOT_IMG+GUIDE_FILMS;


