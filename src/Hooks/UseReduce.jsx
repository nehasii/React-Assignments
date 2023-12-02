import axios from "axios";
import React, {useEffect,useReducer} from "react";

let initializeState={
    newProducts:[],
    isError:false,
};

let productsReducer=(currentState,action)=>
{
    console.log(currentState);
    switch(action.type)
    {
        case "FETCH_SUCCESS":return{...currentState,newProducts:action.payload}
        case "FETCH_ERROR":return{...currentState, isError:true}
    }
    return currentState
}

export default function FakeApi(){
    let [products, productsDispatcher] = useReducer(productsReducer, initializeState)

    let getProducts = async()=>{
        try{
            let {data}= await axios.get("https://fakestoreapi.com/products")
            productsDispatcher({type:"FETCH_SUCCESS", payload:data})
        }
        catch(err){
            productsDispatcher({type:"FETCH_ERROR"});
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div>
            <h1>{products.isError && "ERROR"}</h1>
            {products.newProducts?.map(({id, image})=>{
                return <img key={id} src={image  
                } width="200px" height="200px"/>
            })}
        </div>
    )
}
