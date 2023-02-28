import { useLocation } from "react-router";

 export const useQuaryParams = () =>{
    return new URLSearchParams(useLocation().search)
 }