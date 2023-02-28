import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import PeopleList from '../PeopleList/PeopleList';
import FavoriteList from '../FavoriteList/FavoriteList';




const FavoritePage = ()=>{
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);
    

    useEffect(() => {
        const arr = Object.entries(storeData);
       
        if (arr.length) {
            const res = arr.map(item => {
                
                return {
                    id: item[0],
                    ...item[1]
                }
                
            })
           
            setPeople(res);

        }
    }, []);
console.log(people)
    return (
        <>
            <h1 >Favorites</h1>
            {people.length
                ? <FavoriteList people={people} /> 
                
                : <h2 >No data</h2>
            }
           
        </>
    )
}


export default FavoritePage;


/*

const FavoritePage = ()=>{
    const [people, setPeople] = useState([]);

    const storeData = useSelector(state => state.favoriteReducer);
    

    useEffect(() => {
        const arr = Object.entries(storeData);
       
        if (arr.length) {
            const res = arr.map(item => {
                
                return {
                    id: item[0],
                    ...item[1]
                }
                
            })
           
            setPeople(res);

        }
    }, []);
console.log(people)
    return (
        <>
            <h1 >Favorites</h1>
            {people.length
                ? <PeopleList people={people} /> 
                
                : <h2 >No data</h2>
            }
           
        </>
    )
}


*/