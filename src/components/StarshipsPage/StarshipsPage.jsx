 
import React , { useEffect,useState } from 'react';

import { getApiRecourse,changeHTTP } from '../../utils/network';
import PeopleList from '../PeopleList/PeopleList';
import PeopleNavigation from '../PeopleNavigation/PeopleNavigation';
import { SWAPI_STARSHIPS ,API_STARSHIPS } from '../../constans/api';
import {getPeoplePageId,getStarshipsImage,getStarshipsId } from '../../services/getPeopleData';
import { withErrorAppi } from '../../hoc-halper/withErrorapi';
import { useQuaryParams } from '../../hooks/useQuaryParams'; 

const StarshipsPage = ({setErrorApi})=>{
    const [people,setPeople] = useState(null);
 const [previousPage,setPreviousPage] = useState(null);
 const [nextPage,setNextPage] = useState(null);
 const [counterPage,setCounterPage] = useState(1);

 const query = useQuaryParams();
 const queryPage = query.get('page');


 const getRecourse = async (url)=>{
     const data = await getApiRecourse( url);
     
     if(data){
       
        const peopleList = data.results.map(({name,url})=>{
       
            const id = getStarshipsId(url);
            const img = getStarshipsImage(id)
                
                
               return { 
                id,                                      // возвращаем обьект 
                name,
                 img,
                 category : 'starships'
                    }
                })
        
            setPeople(peopleList); // перезаписываем значение стейтов
            setPreviousPage( changeHTTP(data.previous) );
            setNextPage( changeHTTP(data.next) );
            setCounterPage( getPeoplePageId(url))
            setErrorApi(false);
     }else{
        setErrorApi(true);
     }
        
               
        }
        
       
       
       useEffect(()=>{  // используем хук
       getRecourse(API_STARSHIPS + queryPage);
       },[])
       
return(
    <>
                <PeopleNavigation
                getRecourse = {getRecourse}
                previousPage = {previousPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
                category ={SWAPI_STARSHIPS }

                />
               
               <PeopleList people={people} 
               exceptionID={40}
               
               />

              

    </>
)
}

export default withErrorAppi(StarshipsPage);