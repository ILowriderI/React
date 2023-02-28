import { HTTP,HTTPS } from "../constans/api";

/**
 * изменяет URL c HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} url with HTTP
 */

export const changeHTTP = url =>{
    const result = url ? url.replace(HTTP , HTTPS) : url ;
    return result;
}


/**
 *  отправляет запрос Fetch 
 * @param {String} url  для запроса
 * @returns{Promise}  результат запроса
 */

export const getApiRecourse = async (url) =>{
   try{
    const data = await fetch(url);
    if(!data.ok){
        console.error('could not fetch',data.status )
        return false;
    }
    return await data.json();
   }catch(error){
    console.error('could not fetch ' ,error.message);
    return false;
   }


   
}


   /**
 * Отправляет несколко запросов Fetch из массива URL
 * @param {Array<String>} urls - массив с URL для запроса
 * @return {Promise} - Promise с результатом запросов
 */
export const makeConcurrentRequest = async (urls) => {
    const res = await Promise.all(urls.map((res) => {
		return fetch(res).then(res => res.json())
	 }))

	 return res;
};







/*
(async()=>{       // самовызов асинхр функции 
const body = await getApiRecourse(SWAPI_ROOT + SWAPI_PEOPLE);
console.log(body);
})();  
*/







