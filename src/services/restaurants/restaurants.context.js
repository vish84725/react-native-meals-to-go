import React, { useState, createContext, useEffect, useMemo } from "react";

 import { restaurantsRequest, restaurantTransform } from "./restaurants.service";

 export const RestaurantsContext = createContext();

 export const RestaurantsContextProvider = ({ children }) => {
   const [restaurants,setRestaurants] = useState([]);
   const [isLoading,setIsLoading] = useState(false);
   const [error,setError] = useState(null);

   useEffect(() => {
    retrieveRestaurants();
   },[]);

   const retrieveRestaurants = ()=>{
    setIsLoading(true);
    setTimeout(()=>{
        restaurantsRequest().then(restaurantTransform).then((results)=> {
            console.log('resultsVVV',results);
            setIsLoading(false);
            setRestaurants(results);
        }).catch(err => {
            setError(err);
            setIsLoading(false);
        })
    },2000)
   };
   return (
     <RestaurantsContext.Provider
       value={{
         restaurants: restaurants,
         isLoading,
         error
       }}
     >
       {children}
     </RestaurantsContext.Provider>
   );
 };