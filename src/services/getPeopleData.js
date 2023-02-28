import {
    SWAPI_PARAM_PAGE,
    HTTP, HTTPS, SWAPI_ROOT, SWAPI_PEOPLE,
    URL_IMG_PERSON, GUIDE_IMG_EXTENSION,
    URL_IMG_VEHICLES ,SWAPI_VEHICLES,
    SWAPI_STARSHIPS,URL_IMG_STARSHIPS,
    URL_IMG_PLANETS,SWAPI_PLANETS,
     SWAPI_FILMS,URL_IMG_FILMS 
} from '../constans/api';






// Получить ID страницы для персонажей

export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+SWAPI_PARAM_PAGE.length);

    return Number(id);
}


// Проверка протокола: HTTP или HTTPS

const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}


// Получить ID персонажа по URL

const getId = (url, category) => {
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        .replace(/\//g, '')

    return id;
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);
export const getVehiclesId = url => getId(url, SWAPI_VEHICLES);
export const getStarshipsId = url => getId(url, SWAPI_STARSHIPS);
export const getPlanetsId = url => getId(url, SWAPI_PLANETS);
export const getFilmsId = url => getId(url, SWAPI_FILMS);


// Получить изображение для персонажа

export const getPeopleImage = id => `${URL_IMG_PERSON}/${id+GUIDE_IMG_EXTENSION}`;
export const getVehiclesImage = id => `${URL_IMG_VEHICLES }/${id+GUIDE_IMG_EXTENSION}`;
export const getStarshipsImage = id => `${URL_IMG_STARSHIPS }/${id+GUIDE_IMG_EXTENSION}`;
export const getPlanetsImage = id => `${URL_IMG_PLANETS }/${id+GUIDE_IMG_EXTENSION}`;
export const getFilmsImg = id => `${URL_IMG_FILMS }/${id+GUIDE_IMG_EXTENSION}`;






 export const errorImg =(e)=>{
        const img =e.target
       if(e.target){
        img.src ='https://starwars-visualguide.com/assets/img/placeholder.jpg'
       }
    }


/*import { SWAPI_PEOPLE, HTTP, SWAPI_ROOT } from "../constans/api"

const getId = (url, category)=>{
    const id = url.raplace(HTTP+SWAPI_ROOT + category,'');
    return id;
}




export const getPeopleId = url =>getId(url,SWAPI_PEOPLE) */