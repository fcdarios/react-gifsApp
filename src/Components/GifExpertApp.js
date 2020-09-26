import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


export const GifExpertApp = () => {

   
   const [categories, setCategories] = useState(['Hola'])
   


   return (
      <>
         <h2>Busca un Gif</h2>
         <AddCategory setCategories= { setCategories } />
         <hr />
         
         <ol>
            {
               categories.map( category => 
                  <GifGrid
                     key={ category } 
                     category={ category } 
                  />
               )
            }
         </ol>

      </>
   )
}
