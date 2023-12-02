import axios from "axios";
import React, { useReducer, useEffect } from "react";

let initializeState=[];

let productsReducer=(currentState,action)=>{
    switch(action.type){
        case "FETCH_SUCCESS": return action.payload
    }

    return currentState;
}

export default function FakeStoreApi(){
    let [products, productsDispatcher]=useReducer(productsReducer, initializeState)

    let getProducts = async()=>{
        try{
            let {data}= await axios.get("https://fakestoreapi.com/products")
            productsDispatcher({type:"FETCH_SUCCESS", payload:data})
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getProducts()
    },[])

    return(
        <div>
            {products.map(({id, image})=>{
                return <img key={id} src={image  
                } width="200px" height="200px"/>
            })}
        </div>
    )
}