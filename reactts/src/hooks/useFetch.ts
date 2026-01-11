import { useEffect, useState } from "react";

interface FetchState<T>{
    data:T | null;
    loading:boolean;
    error: string | null
}

export function useFetch<T>(url:string):FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data:null,
        loading:true,
        error:null,
    });

    //useEffect to make fetch request
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`error: ${response.status}`)
                }
                const data:T = await response.json();
                setState({
                    data,
                    loading:false,
                    error:null
                })
            }catch(error){
                setState({
                    data:null,
                    loading:false,
                    error:(error as Error).message
                })
            }
        }
        fetchData();
    }, [url])
    return state
}