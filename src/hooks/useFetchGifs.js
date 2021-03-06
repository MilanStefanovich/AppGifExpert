import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import {getGif} from "../helpers/getGifs";






export const useFetchGifs = (category) => {
   const [state, setstate] = useState({
       data:[],
       loading:true
   });
   
   useEffect(() => {

    getGif(category).then(imgs => {

            setstate({
                data:imgs,
                loading:false
            });    
    })

   }, [category])

   
   return state;
}

