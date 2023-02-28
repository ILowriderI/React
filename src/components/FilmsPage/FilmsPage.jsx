import React , { useEffect,useState } from 'react';

import { getApiRecourse,changeHTTP } from '../../utils/network';
import PeopleList from '../PeopleList/PeopleList';
import { API_FILMS } from '../../constans/api';
import {getFilmsImg,getFilmsId  } from '../../services/getPeopleData';
import { withErrorAppi } from '../../hoc-halper/withErrorapi';





const FilmsPage = ({setErrorApi})=>{
    const [people,setPeople] = useState(null);




 const getRecourse = async (url)=>{
     const data = await getApiRecourse( url);
     
     if(data){
       
        const peopleList = data.results.map(({title,url})=>{
      
            const id = getFilmsId(url);
            const img = getFilmsImg(id);
                
                
               return { 
                id,                                      // возвращаем обьект 
                name:title,
                 img,
                 category : 'films'
                    }
                })
        
            setPeople(peopleList); // перезаписываем значение стейтов
          
            setErrorApi(false);
     }else{
        setErrorApi(true);
     }
        
               
        }
        
       
       
       useEffect(()=>{  // используем хук
       getRecourse(API_FILMS );
       },[])
       
return(
    <>
                
               <PeopleList people={people}  />

            
    </>
)
}

export default withErrorAppi(FilmsPage);