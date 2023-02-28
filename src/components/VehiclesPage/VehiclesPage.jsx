import React , { useEffect,useState } from 'react';

import { getApiRecourse,changeHTTP } from '../../utils/network';
import PeopleList from '../PeopleList/PeopleList';
import PeopleNavigation from '../PeopleNavigation/PeopleNavigation';
import { API_VEHICLES,SWAPI_VEHICLES  } from '../../constans/api';
import {getPeoplePageId,getVehiclesImage,getVehiclesId } from '../../services/getPeopleData';
import { withErrorAppi } from '../../hoc-halper/withErrorapi';
import { useQuaryParams } from '../../hooks/useQuaryParams';




const VehiclesPage = ({setErrorApi})=>{
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
       
            const id = getVehiclesId(url);
            const img = getVehiclesImage(id)
                
                
               return { 
                id,                                      // возвращаем обьект 
                name,
                 img,
                 category : 'vehicles'
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
       getRecourse(API_VEHICLES + queryPage);
       },[])
       
return(
    <>
                <PeopleNavigation
                getRecourse = {getRecourse}
                previousPage = {previousPage}
                nextPage = {nextPage}
                counterPage = {counterPage}
                category ={SWAPI_VEHICLES }

                />
               
               <PeopleList people={people} 
              // exceptionID={}
               
               
               />

              

    </>
)
}

export default withErrorAppi(VehiclesPage);
